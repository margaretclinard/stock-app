
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
    $('table').on("click", '.remove', function(){
    $(this).parent().parent().remove();
    });
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
<<<<<<< HEAD

    
    })
    var $tr = $('<tr></tr>');

    var $tdCompany = $('<td></td>');
    $tdCompany.text(stock.Name);
    $tr.append($tdCompany);

=======
    var $tr = $('<tr></tr>');

    var $tdCompany = $('<td></td>');
    $tdCompany.text(stock.Name);
    $tr.append($tdCompany);

>>>>>>> 54c79ef30bf602f34e99a1bfe86a5a904e31bb2d
    var $tdPrice = $('<td></td>');
    $tdPrice.text(stock.LastPrice);
    $tr.append($tdPrice);

    var $tdQuantity = $('<td></td>');
<<<<<<< HEAD
    $tdPrice.text(quantityVal);
=======
    $tdQuantity.text(quantityVal);
>>>>>>> 54c79ef30bf602f34e99a1bfe86a5a904e31bb2d
    $tr.append($tdQuantity);

    var $tdDayPrice = $('<td></td>');
    $tdDayPrice.text(priceChange);
    $tr.append($tdDayPrice);

    var $tdPercent = $('<td></td>');
<<<<<<< HEAD
    $tdDayPrice.text(percentChange + "%");
    $tr.append($tdPercent);

    var $trRemoveButton = $('<td><button>Remove</button></td>');
    $trRemoveButton.on("click", function(){
    	$tr.empty();
=======
    $tdPercent.text(percentChange + "%");
    $tr.append($tdPercent);

    var $removeButton = $('<td><button class="remove">Remove</button></td>');
    $tr.append($removeButton);

>>>>>>> 54c79ef30bf602f34e99a1bfe86a5a904e31bb2d

    $('#target').append($tr);

  }

})();

