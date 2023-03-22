package main

import (
	"fmt"
	"io"
	"net/http"
)

func WriteString(w http.ResponseWriter, s string) {
	io.WriteString(w, fmt.Sprintln(s))
	fmt.Println(s)
}
