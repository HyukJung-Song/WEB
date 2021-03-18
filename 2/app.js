var express = require('express');
var http = require('http');
var app = express();

let mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'test'
});
connection.connect(); // 로그인하는거임 하이디sql

var server = http.createServer(app).listen(80);

app.get('/testdb', function(req, res) {
  connection.query(`SELECT NO, studentNo, NAME FROM student WHERE NO >= 12`, function(error, results, fields) {
    if (error) throw error;
    console.log(results);
    setTimeout(function(){
        res.send(results)
    }, 5000);               // 5초후 실행됨
  });
});
