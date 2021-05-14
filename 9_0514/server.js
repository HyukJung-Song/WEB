var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);

let mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'test'
});
connection.connect();

app.get('/item', function (req, res) {
  res.sendfile("src/item.html")
});

app.get('/itemCheck', function(req, res) {
  // console.log(items[0].price)
  // console.log(req.query.price);

  let items = [
    {name:"item1", price:1000},
    {name:"itemm2", price:5000},
    {name:"itemmm3", price:10000},
    {name:"iteem4", price:30000},
    {name:"itttem5", price:50000},
    {name:"iiiitem6", price:100000},
    {name:"iteem7", price:500000}
  ];

  let itemName = "구매불가";
  const price = req.query.price;  // const는 변경이 안된다.

  for (i in items) {
    if (items[i].price <= price) {
      itemName = items[i].name;
    }
  }
  res.send(itemName)
});


app.get('/priceCheck', function(req, res) {
  connection.query(`SELECT itemPrice
    FROM item where itemName="${req.query.name}"`,  // ``안에 ${}있으면 {}는 변수로 인식
    function(error, results, fields) {
      if (error) throw error;
      res.send(results)
  });
});
