exports.User = {
  createTable: (conn) => {
    return new Promise((resolve, reject) => {
      if (!conn) {
        console.error("Database connection is undefined");
      }

      conn.query(
        `CREATE TABLE IF NOT EXISTS users (
            id int not null auto_increment,
            name varchar(255) not null,
            primary key (id)
            );`,
        (err, result) => {
          if (err) resolve([null, err]);
          console.log("Table users created!");
          resolve([result, null]);
        }
      );
    });
  },
  index: (conn) => {
    return new Promise((resolve, reject) => {
      conn.query(`SELECT * FROM users;`, (err, result) => {
        if (err) resolve([null, err]);
        console.log("Fetch users data success!");
        resolve([result, null]);
      });
    });
  },
  create: (conn, name) => {
    return new Promise((resolve, reject) => {
      conn.query(
        `INSERT INTO users(name) VALUES ('${name}');`,
        (err, result) => {
          if (err) resolve([null, err]);
          console.log("Create user data success!");
          resolve([result, null]);
        }
      );
    });
  },
  update: (conn, name, id) => {
    console.log(`On update id:${id} with name:${name}`);
    return new Promise((resolve, reject) => {
      conn.query(
        `UPDATE users SET name='${name}' WHERE id=${id};`,
        (err, result) => {
          if (err) resolve([null, err]);
          console.log(`Update user data with id ${id} success!`);
          resolve([result, null]);
        }
      );
    });
  },
  destroy: (conn, id) => {
    return new Promise((resolve, reject) => {
      conn.query(`DELETE FROM users WHERE id=${id};`, (err, result) => {
        if (err) resolve([null, err]);
        console.log(`Delete user data with id ${id} success!`);
        resolve([result, null]);
      });
    });
  },
};
