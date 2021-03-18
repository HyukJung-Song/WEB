
var express = require('express');
var http = require('http');
var app = express();

let mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '1234',
  database : 'test'
  });
  connection.connect(); // 로그인하는거임 하이디sql

let a = 0;
var server = http.createServer(app).listen(80);

app.get('/', function (req, res) {
  res.send("here is main@@@@@@@@@")
});
app.get('/testHtml', function (req, res) {
  console.log("app.js에서 실행됨(서버쪽 console에 적힘)")
  res.sendfile("test.html")
});
app.get('/testHtml0', function (req, res) {
  res.sendfile("test0.html")
});
app.get('/table', function (req, res) {
  res.sendfile("table.html")
});
app.get('/css', function (req, res) {
  a = a + 1;
  console.log(a);
  res.sendfile("css.html")
});
app.get('/b', function (req, res) {
  res.sendfile("a.html")
});

app.get('/testdb', function (req, res) {
  connection.query(`SELECT NO, studentNo, NAME FROM student WHERE NO >= 10`
  , function (error, results, fields) {
  if (error) throw error;
  console.log(results); // 노드가 데이터베이스에 위 쿼리를 보내서 결과를 콘솔에 찍어라
  res.send(results) // 결과를 브라우저에 띄워라.
  });
});
