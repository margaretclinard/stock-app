(function(){
  'use strict';

  var total = 0;

  $(document).ready(function(evt){
    $('#submit').click(getStock);
    $('table').on("click", '.remove', function(){
      var $tr = $(this).parent().parent();
      var salePrice = $tr.children('.price').val() * $tr.children('.quantity').val() * -1;
      console.log(salePrice);
      currentTotal(salePrice);
      $tr.remove();
    });
  });

  function makeStockUrl() {
    var baseUrl     = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=',
        urlEnd      = '&callback=?',
        stockSymbol = $('.symbol').val(),
        url         = baseUrl + stockSymbol + urlEnd;
    return url;
  }

  function getStock(){
    if($('.symbol').val() === ""){
      alert("Dude. Really? I can't even....");
    }else {
      var url = makeStockUrl();
      $.getJSON(url, function (response) {
        display(response);
        console.log(response);
      });
    }
    clear();
  }


  function currentTotal(amount) {
    console.log(amount);
    total += amount;
    total = Math.round(total*100)/100;
    var $numTotal = $('<h3> TOTAL: $' + total +  '</h3>');
    $('#totalVal').empty().append($numTotal);
  }


  function clear(){
    $('input.symbol')[0].value = "";
    $('input.quantity1').value = "";
  }

  function display(stock){

    var priceChange   = Math.round(stock.Change*100)/100;
    var percentChange = Math.round(stock.ChangePercent*100)/100;
    var quantityVal   = $('.quantity1').val();

    var $tr = $('<tr></tr>');

    var $tdCompany = $('<td></td>');
    $tdCompany.text(stock.Name);
    $tr.append($tdCompany);

    var $tdPrice = $('<td class="price"></td>');
    $tdPrice.text("$" + stock.LastPrice);
    $tr.append($tdPrice);

    var $tdQuantity = $('<td class="quantity"></td>');
    $tdQuantity.text(quantityVal);
    $tr.append($tdQuantity);

    var $tdCurrPrice = $('<td></td>');
    $tdCurrPrice.text('$' + stock.LastPrice);
    $tr.append($tdCurrPrice);

    var $tdDayPrice = $('<td></td>');
    $tdDayPrice.text("$" + priceChange);
    $tr.append($tdDayPrice);

    var $tdPercent = $('<td></td>');
    $tdPercent.text(percentChange + "%");
    $tr.append($tdPercent);

    var $removeButton = $('<td><button class="remove">Remove</button></td>');
    $tr.append($removeButton);

    var cost = quantityVal * stock.LastPrice;
    currentTotal(cost);

    $('#target').append($tr);

  }

})();
