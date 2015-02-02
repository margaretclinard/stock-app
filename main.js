
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

 // var url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=' + input + '&callback=?';

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

  function display(stocks){
    var stockList = [];

    _.forEach(array, function(quotes){
      var $tr = $('<tr></tr>');
    });

    _.forEach(quotes, function(quote){
      var $td = $('<td>' + company + '</td>');
      var $td = $('<td>' + price + '</td>');
      var $td = $('<td>' + quantity + '</td>');
      var $td = $('<td>' + dayPrice + '</td>');
      var $td = $('<td>' + percentageChange + '</td>');

      $tr.append($td);
    });

   stockList.push($tr);
  }

})();

