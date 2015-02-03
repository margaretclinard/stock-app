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

  function getStockSymbol() {
    return $('.symbol').val();
<<<<<<< HEAD
  }

  function displayTotal(total){
    var $p = $('<p></p>');
    $('.total').append($p);
=======
>>>>>>> da975c5ceec7b1235bf63f66192c9fa557c91116
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

  }

})();