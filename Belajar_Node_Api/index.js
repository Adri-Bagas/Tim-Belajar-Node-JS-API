const http = require("http");
const url = require("url");

const connController = require("./Controller/connection-controller");
const userController = require("./Controller/user-controller");

connController.start().then(async (conn) => {
  let app = http.createServer(async (req, res) => {
    await userController.createTable(req, res, conn);

    let link = url.parse(req.url, true);

    if (req.method == "GET") {
      switch (link.pathname) {
        case "/users":
          await userController.index(req, res, conn);
          break;

        default:
          res.writeHead(404, { "Content-Type": "application/json" });
          res.write(
            JSON.stringify({
              msg: "Nothing here",
              error: "not found",
              code: 404,
            })
          );
          res.end();
          break;
      }
    }

    if (req.method == "POST") {
      switch (link.pathname) {
        case "/users":
          await userController.create(req, res, conn);
          break;

        default:
          res.writeHead(404, { "Content-Type": "application/json" });
          res.write(
            JSON.stringify({
              msg: "Nothing here",
              error: "not found",
              code: 404,
            })
          );
          res.end();
          break;
      }
    }

    if (req.method == "PUT") {
      switch (link.pathname) {
        case "/users":
          await userController.update(req, res, conn);
          break;

        default:
          res.writeHead(404, { "Content-Type": "application/json" });
          res.write(
            JSON.stringify({
              msg: "Nothing here",
              error: "not found",
              code: 404,
            })
          );
          res.end();
          break;
      }
    }

    if (req.method == "DELETE") {
      switch (link.pathname) {
        case "/users":
          await userController.destroy(req, res, conn);
          break;

        default:
          res.writeHead(404, { "Content-Type": "application/json" });
          res.write(
            JSON.stringify({
              msg: "Nothing here",
              error: "not found",
              code: 404,
            })
          );
          res.end();
          break;
      }
    }
  });
  app.listen(8080);
  console.log("App runnign on http://localhost:8080");
});
