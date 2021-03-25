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

app.get('/test1', function (req, res) {
  res.sendfile("src/test1.html")
});

// POST로 할때는 아래 3줄 추가해야함. 그리고 req.body.~ 로 써야함.
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// test1.html에서 input버튼을 누르면 ajax가 data를 담고 req를 한다.
// 이 req를 실행해서 db에 아래 쿼리를 실행하면 아래 fuction 내부가 작동하고
// (만일 db가 먹통이면 내부가 작동을 안한다.)
// 그 res를 $("#input").click(function()의 success: function의 res로
// 응답을 보내고 그 응답이 브라우저콘솔에 찍히게 되는 구조임.
app.post('/test1_input', function(req, res) {
  console.log(req.body);  // cmd
  connection.query(
    `INSERT INTO news
    (title, content)
    VALUES
    ('${req.body.title}', '${req.body.content}')`,
    function(error, results, fields) {
         res.send("okay!!")  // 브라우저 콘솔에 띄움
  });  //
});
