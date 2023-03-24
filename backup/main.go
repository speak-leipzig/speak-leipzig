package main

import (
	"fmt"
	"io/ioutil"
	"net/http"

	pg "github.com/habx/pg-commands"
)

const (
	Port          = 8080
	path          = "/backups/"
	basicFilename = "dump"
)

func main() {
	db := NewPostgres("DB_HOST", "DB_PORT", "DB_DATABASE", "DB_USER", "DB_PASSWORD")
	dump := NewDump(db, path, "")
	restore := NewRestore(db, path)

	http.Handle("/", http.FileServer(http.Dir("./static")))

	http.HandleFunc("/getenv", func(w http.ResponseWriter, r *http.Request) {
		getenv(w, db)
	})

	http.HandleFunc("/dump", func(w http.ResponseWriter, r *http.Request) {
		filename := NewFilename()
		dump.SetFileName(filename)
		WriteString(w, "Dumping database to "+filename+"...")
		res := ExecDump(w, dump)
		if res.Error != nil {
			WriteString(w, "Dump failed")
			return
		}
	})

	http.HandleFunc("/backups/", func(w http.ResponseWriter, r *http.Request) {
		files, err := ioutil.ReadDir(path)
		if err != nil {
			WriteString(w, "Error while reading directory: "+err.Error())
			return
		}

		if len(files) == 0 {
			WriteString(w, "No backup found")
			return
		}

		linklist := make(MultiLinkList, len(files))
		for i, f := range files {
			linklist[i] = MultiLink{HrefMain: "/download?filename=" + f.Name(), TextMain: f.Name(), HrefSub: "/restore?filename=" + f.Name(), TextSub: "Restore"}
		}
		WrapperHtml(w, r, linklist.ToHtml)
	})

	http.HandleFunc("/list", func(w http.ResponseWriter, r *http.Request) {
		files, err := ioutil.ReadDir(path)
		if err != nil {
			WriteString(w, "Error while reading directory: "+err.Error())
			return
		}

		if len(files) == 0 {
			WriteString(w, "No backup found")
			return
		}

		// list all files as json
		list := make(List, len(files))
		for i, f := range files {
			list[i] = f.Name()
		}
		list.ToJson(w, r)
	})

	http.HandleFunc("/restore", func(w http.ResponseWriter, r *http.Request) {
		filename := r.URL.Query().Get("filename")
		if filename == "" {
			WriteString(w, "No filename given")
			return
		}
		fmt.Println("Restoring database...")
		ExecRestore(w, filename, restore)
	})

	http.HandleFunc("/download", func(w http.ResponseWriter, r *http.Request) {
		filename := r.URL.Query().Get("filename")
		if filename == "" {
			WriteString(w, "No filename given")
			return
		}
		http.ServeFile(w, r, path+filename)
	})

	fmt.Printf("Listening on port %d\n", Port)
	err := http.ListenAndServe(fmt.Sprintf(":%d", Port), nil)
	if err != nil {
		panic(err)
	}
}

func getenv(w http.ResponseWriter, postgres *pg.Postgres) {
	fmt.Fprintf(w, "%s@%s:%d/%s",
		postgres.Username,
		postgres.Host,
		postgres.Port,
		postgres.DB,
	)
}
