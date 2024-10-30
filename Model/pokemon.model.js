

exports.Pokemon = {
    createTable: function(conn)  {
        conn.query(`
            CREATE TABLE IF NOT EXISTS pokemons (
                id int(11) NOT NULL auto_increment,
                name varchar(255) not null,
                element varchar(255) not null,
                img varchar(255) not null,
                PRIMARY KEY (id)
            );
        `, function (err, result){
            if (err) throw err;
            console.log("Table Pokemon Created!")
        })
    },
    all: function(conn)  {
        return new Promise((resolve, reject) => {
            conn.query(`
                SELECT * FROM pokemons;
            `, function (err, result, fields){
                if (err) return resolve([null, err]);

                return resolve([result, err]);
            })
        })
    },
    create: (conn, name, element, img) => {

        return new Promise((resolve, reject) => {
            conn.query(`
                INSERT INTO pokemons (name, element, img) VALUES ('${name}', '${element}', '${img}');
            `, function (err, result){
                if (err) resolve(err);
                console.log(`Success create ${name}!`)
                resolve(null)
            })
        })


    },
    delete: (conn, id) => {
        // Bikin Sendiri!
    },
    update: (conn, id, name, element, img) => {
         // Bikin Sendiri!
    },
}

