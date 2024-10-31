const http = require('http')
const dotenv = require('dotenv')
const url  = require('url')
const db = require('./Utils/db-connection')
const PokemonController = require("./Controller/pokemon.controller")
const DP = require("./Utils/default-pages")

dotenv.config()
db.start().then((conn) => {
    var app = http.createServer(function (req, res) {
      let q = url.parse(req.url, true);

      if (req.method == "GET") {
        switch (q.pathname) {
          case "/pokemon":
            PokemonController.index(conn, req, res);
            break;
          default:
            DP.notfound(req, res);
            break;
        }
      }

      if (req.method == "POST") {
        switch (q.pathname) {
          case "/pokemon":
            PokemonController.create(conn, req, res);
            break;
          default:
            DP.notfound(req, res);
            break;
        }
      }

      if (req.method == "PUT") {
        switch (q.pathname) {
          case "/pokemon":
            console.log("Doing update");
            PokemonController.update(conn, req, res)
            break;
          default:
            DP.notfound(req, res);
            break;
        }
      }

      if (req.method == "DELETE") {
        switch (q.pathname) {
          case "/pokemon":
            PokemonController.destroy(conn, req, res);
            break;
          default:
            DP.notfound(req, res);
            break;
        }
      }
    });

    console.log("starting at http://localhost:8080");

    app.listen(8080);
})