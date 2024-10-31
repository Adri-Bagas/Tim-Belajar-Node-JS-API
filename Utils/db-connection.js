const mysql = require('mysql')
const {Pokemon} = require("../Model/pokemon.model")

exports.start = function () {
    var connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT
    });

    
    connection.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
    
        connection.query("CREATE DATABASE IF NOT EXISTS " + process.env.DB_NAME, function (err, result) {
            if (err) throw err;
    
            console.log("DB Created!");
    
            connection.query('USE ' + process.env.DB_NAME, function (err, result) {
                if (err) throw err;
    
                console.log("DB Used!");
    
                Pokemon.createTable(connection)
            })
        })
    
    });

    return connection;
}