var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "qwerty",
    database: "mydb"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO products (id, name) VALUES ?";
    var values = [
        [ 153, 'Chocolate Heavan'],
        [ 154, 'Tasty Lemons'],
        [ 155, 'Vanilla Dreams']
       
    ]
    con.query(sql,[values], function (err, result){
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
    })
})

