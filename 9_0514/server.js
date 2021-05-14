var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);


app.get('/item', function (req, res) {
  res.sendfile("src/item.html")
});

app.get('/priceCheck', function(req, res) {
  // console.log(req.query.price);
  let price = req.query.price;
  let canBuy;
  if (price < 1000) {
    canBuy = "구매불가"
  } else if (price < 5000) {
    canBuy = "item1"
  } else if (price < 10000) {
    canBuy = "item2"
  } else if (price < 30000) {
    canBuy = "item3"
  } else if (price < 50000) {
    canBuy = "item4"
  } else if (price < 100000) {
    canBuy = "item5"
  } else if (price < 500000) {
    canBuy = "item6"
  } else{
    canBuy = "item7"
  }
  res.send(canBuy)
});
