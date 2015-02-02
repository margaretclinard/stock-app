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
    var $tr = $('<tr></tr>');

    var $tdCompany = $('<td></td>');
    $tdCompany.text(stock.Name);
    $tr.append($tdCompany);

    var $tdPrice = $('<td></td>');
    $tdPrice.text(stock.LastPrice);
    $tr.append($tdPrice);

    var $tdQuantity = $('<td></td>');
    $tdQuantity.text(quantityVal);
    $tr.append($tdQuantity);

    var $tdDayPrice = $('<td></td>');
    $tdDayPrice.text(priceChange);
    $tr.append($tdDayPrice);

    var $tdPercent = $('<td></td>');
    $tdPercent.text(percentChange + "%");
    $tr.append($tdPercent);

    $('#target').append($tr);

  }

})();
