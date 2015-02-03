(function(){
  'use strict';

  var $body;
  var $total = 0;
  var $numTotal;

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

  function getStockSymbol() {
    return $('.symbol').val();
  }

  function displayTotal(total){
    var $p = $('<p></p>');
    $('.total').append($p);
  }

  function display(stock){

    var priceChange = Math.round(stock.Change*100)/100;
    var percentChange = Math.round(stock.ChangePercent*100)/100;
    var quantityVal = $('.quantity').val();
    $total = $total + (quantityVal * (stock.LastPrice));
    $total = Math.round($total*100)/100;
    $numTotal = $('<h2> TOTAL: $' + $total +  '</h2>')

    var $tr = $('<tr></tr>');

    var $tdCompany = $('<td></td>');
    $tdCompany.text(stock.Name);
    $tr.append($tdCompany);

    var $tdPrice = $('<td></td>');
    $tdPrice.text('$' + stock.LastPrice);
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

    var $removeButton = $('<td><button class="remove">Remove</button></td>');
    $tr.append($removeButton);


    $('#target').append($tr);
    $('#totalVal').empty().append($numTotal);

  }

})();
