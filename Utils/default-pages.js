const fs =  require('fs');


exports.notfound = function (req, res) {
    let page = fs.readFileSync("./View/DefaultPages/404.html")
    res.writeHead(404, {"Content-Type": "application/json"});
    res.write(`{
        "msg": "Nothing Here!",
        "status": 404
    }`)
    res.end()
}