package main

import (
	"log"
	"net/http"
)

func main() {
	http.HandleFunc("/message", func(w http.ResponseWriter, r *http.Request) {
		log.Println("request received")
		w.Header().Add("Access-Control-Allow-Origin","*")
		w.Write([]byte(`{"message":"Hello World!"}`))
	})
	http.ListenAndServe(":8080", nil) 
}


/*api response
curl -i -X GET http://localhost:8080/message 

HTTP/1.1 200 OK
Access-Control-Allow-Origin: *
Date: Tue, 28 Dec 2021 21:36:12 GMT
Content-Length: 26
Content-Type: text/plain; charset=utf-8
*/