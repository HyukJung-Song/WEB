var express = require('express');
var http = require('http');
var app = express();

// POST로 할때는 아래 3줄 추가해야함. 그리고 req.body.~ 로 써야함.
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'test'
});
connection.connect();
var server = http.createServer(app).listen(80);

app.get('/test1', function (req, res) {
  res.sendfile("src/test1.html")
});
