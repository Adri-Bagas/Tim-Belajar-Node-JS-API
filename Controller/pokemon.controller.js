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

exports.update = async function (conn, req, res) {
    let [data, err] = await parseBody(req)
    console.log(data);
    if (err) throw err;
    
    err = await Pokemon.update(conn, data.id, data.name, data.element, data.img);
    if (err) throw err;

    res.writeHead(200, {"Content-Type": "application/json"})
    res.write(JSON.stringify({
        msg: `Success update pokemon with id: ${data.id}!`,
        status: 200,
        success: true
    }))
    res.end()
}

exports.destroy = async function (conn, req, res) {
    let [data, err] = await parseBody(req)
    if (err) throw err;
    
    err = await Pokemon.delete(conn, data.id);
    if (err) throw err;

    res.writeHead(200, {"Content-Type": "application/json"})
    res.write(JSON.stringify({
        msg: `Success delete pokemon with id: ${data.id}!`,
        status: 200,
        success: true
    }))
    res.end()
}