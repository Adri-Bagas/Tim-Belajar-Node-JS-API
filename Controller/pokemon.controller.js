const {Pokemon} = require("../Model/pokemon.model")
const {parseBody} = require("../Utils/utils-function")

exports.index = async function (conn, req, res) {
    let [results, err] = await Pokemon.all(conn)

    if (err) throw err;

    res.writeHead(200, {"Content-Type": "application/json"})
    res.write(JSON.stringify(results))
    res.end()
}

exports.create = async function (conn, req, res) {
    let [data, err] = await parseBody(req)
    if (err) throw err;
    
    err = await Pokemon.create(conn, data.name, data.element, data.img);
    if (err) throw err;

    res.writeHead(200, {"Content-Type": "application/json"})
    res.write(JSON.stringify({
        msg: `Success create ${data.name}!`,
        status: 200,
        success: true
    }))
    res.end()
}

exports.update = function (req, res) {
    // Bikin Sendiri!
}

exports.destroy = function (req, res) {
    // Bikin Sendiri!
}