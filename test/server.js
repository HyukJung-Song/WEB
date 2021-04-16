

// db말고 서버로 웹페이지만 띄우기(get)위한 아주 기초세팅.
var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(86);

app.get('/test', function (req, res) {
  res.sendfile("src/test.html")
});
