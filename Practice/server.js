
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
var server = http.createServer(app).listen(81);

app.get('/test1', function (req, res) {
  console.log(req)
  res.sendfile("src/test1.html")
});

app.get('/test1_db', function(req, res) {
  // console.log(req.query.no, req.query.no2, req.query.no3)
  connection.query(`SELECT no, studentno, name, age
    FROM student where no=${req.query.no}`,  // ``안에 ${}있으면 {}는 변수로 인식
    function(error, results, fields) {
    if (error) throw error;
        res.send(results)
  });
});
