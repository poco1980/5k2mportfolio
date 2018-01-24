var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "Noah",
    password: "larissa7",
    database: "5k2m"
});

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT id, symbol from Portfolio_1", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
});