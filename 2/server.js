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


app.get('/ajaxPracticeForm', function (req, res) {
  res.sendfile("src/ajaxPractice.html")
});

app.get('/studentInfoPractice', function(req, res) {
  // console.log(req.query.no, req.query.no2, req.query.no3)
  // http://localhost/studentInfoPractice?no=2&no2=5&no3=10
  connection.query(`SELECT NO, studentNo, NAME
    FROM student where no=${req.query.no}`,
    function(error, results, fields) {
    if (error) throw error;
        res.send(results)
  });
});
