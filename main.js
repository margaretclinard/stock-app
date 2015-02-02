
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
(function(){
  'use strict';

  var $body;
  

  $(document).ready(function(){
    $('#submit').click(getStock);
  });

  function makeStockUrl() {
    var baseUrl = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=',
        urlEnd = '&callback=?',
        stockSymbol = getStockSymbol(),
        url = baseUrl + stockSymbol + urlEnd;
    return url;
  }

  function getStock(){
    var url = makeStockUrl();
    $.getJSON(url, function (response) {
      display(response);
      console.log(response);
    });
  }
    //stock ticker and quantity, make getJSON call
    //calls makeStockUrl
    //call display
    //append to body


  function getStockSymbol() {
    return $('.symbol').val();
    //$
  }

  function display(stock){

    var priceChange = Math.round(stock.Change*100)/100;
    var percentChange = Math.round(stock.ChangePercent*100)/100;
    var quantityVal = $('.quantity').val();

    
    })
    var $tr = $('<tr></tr>');

    var $tdCompany = $('<td></td>');
    $tdCompany.text(stock.Name);
    $tr.append($tdCompany);

    var $tdPrice = $('<td></td>');
    $tdPrice.text(stock.LastPrice);
    $tr.append($tdPrice);

    var $tdQuantity = $('<td></td>');
    $tdPrice.text(quantityVal);
    $tr.append($tdQuantity);

    var $tdDayPrice = $('<td></td>');
    $tdDayPrice.text(priceChange);
    $tr.append($tdDayPrice);

    var $tdPercent = $('<td></td>');
    $tdDayPrice.text(percentChange + "%");
    $tr.append($tdPercent);

    var $trRemoveButton = $('<td><button>Remove</button></td>');
    $trRemoveButton.on("click", function(){
    	$tr.empty();

    $('#target').append($tr);

  }

})();

