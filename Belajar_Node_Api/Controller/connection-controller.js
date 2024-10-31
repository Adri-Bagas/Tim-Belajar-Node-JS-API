const mysql = require("mysql");
const dotenv = require("dotenv");

dotenv.config();

exports.start = () => {
  return new Promise((resolve, reject) => {
    let conn = mysql.createConnection({
      host: process.env.db_host,
      user: process.env.db_username,
      password: process.env.password,
      port: process.env.db_port,
    });

    conn.connect((err) => {
      if (err) reject(err);
      console.log("Database connected!");

      conn.query(
        "CREATE DATABASE IF NOT EXISTS " + process.env.db_name,
        (err, result) => {
          if (err) reject(err);
          console.log("Database created");

          conn.query(`USE ${process.env.db_name}`, (err, result) => {
            if (err) reject(err);
            console.log("Database used");

            resolve(conn);
          });
        }
      );
    });
  });
};
