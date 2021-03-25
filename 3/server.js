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

app.get('/test', function (req, res) {
  res.sendfile("src/test.html")
});

// POST로 할때는 아래 3줄 추가해야함. 그리고 req.body.~ 로 써야함.
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/student', function(req, res) {
  connection.query(
    `INSERT INTO student
    (studentNo, NAME, age)
    VALUES
    ('${req.body.studentNo}', '${req.body.NAME}', ${req.body.age})`,
    function(error, results, fields) {
        res.send(results)
  });
});

app.post('/studentMod', function(req, res) {
  connection.query(
    `UPDATE student
    SET NAME='${req.body.NAME}', age=${req.body.age}
    WHERE NO = 7`,
    function(error, results, fields) {
        res.send(results)
  });
});

app.get('/if', function (req, res) {
  res.sendfile("src/if.html")
});
