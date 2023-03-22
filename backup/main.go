package main

import (
	"fmt"
	"net/http"
	"os"
	"strconv"

	pg "github.com/habx/pg-commands"
)

const (
	Port = 8080
	path = "/backups/"
)

func main() {
	var dumpExec *pg.Result = nil
	port, err := strconv.Atoi(os.Getenv("DB_PORT"))
	if err != nil {
		panic(err)
	}

	postgres := &pg.Postgres{
		Host:     os.Getenv("DB_HOST"),
		Port:     port,
		DB:       os.Getenv("DB_DATABASE"),
		Username: os.Getenv("DB_USER"),
		Password: os.Getenv("DB_PASSWORD"),
	}

	dump := NewDump(postgres, path, "dump.sql")
	restore := NewRestore(postgres, path)

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "I'm a backup server!")
	})

	http.HandleFunc("/getenv", func(w http.ResponseWriter, r *http.Request) {
		getenv(w, postgres)
	})

	http.HandleFunc("/dump", func(w http.ResponseWriter, r *http.Request) {
		WriteString(w, "Dumping database...")
		dumpExec = ExecDump(w, dump)
	})

	http.HandleFunc("/restore", func(w http.ResponseWriter, r *http.Request) {
		if dumpExec == nil {
			WriteString(w, "No dump to restore")
			return
		}
		fmt.Println("Restoring database...")
		ExecRestore(w, dumpExec, restore)
	})

	fmt.Printf("Listening on port %d\n", Port)
	err = http.ListenAndServe(fmt.Sprintf(":%d", Port), nil)
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
