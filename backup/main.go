package main

import (
	"fmt"
	"net/http"
	"os"
	"strconv"

	pg "github.com/habx/pg-commands"
)

const (
	Port     = 8080
	path     = "/backups/"
	filename = "dump.sql"
)

func main() {
	var dumpExec *pg.Result = nil

	postgres := NewPostgres("DB_HOST", "DB_PORT", "DB_DATABASE", "DB_USER", "DB_PASSWORD")
	dump := NewDump(postgres, path, filename)
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
	err := http.ListenAndServe(fmt.Sprintf(":%d", Port), nil)
	if err != nil {
		panic(err)
	}
}

func NewPostgres(host, port, db, user, password string) *pg.Postgres {
	porttoi, err := strconv.Atoi(os.Getenv(port))
	if err != nil {
		panic(err)
	}

	return &pg.Postgres{
		Host:     os.Getenv(host),
		Port:     porttoi,
		DB:       os.Getenv(db),
		Username: os.Getenv(user),
		Password: os.Getenv(password),
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
