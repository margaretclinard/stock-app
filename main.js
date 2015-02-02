var input = 'AAPL';
var url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=' + input + '&callback=?';

$.getJSON(url, function (response) {
  console.log(response);
});

function getStock() {
  var baseUrl     = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=',
      urlEnd      = '&callback=?',
      stockSymbol = getStockSymbol(),
      url         = baseUrl + stockSymbol + urlEnd;
  return url;
}

function getStockSymbol() {
  return document.getElementByClass('symbol').value;
  //$
}
