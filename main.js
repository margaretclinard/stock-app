(function(){
  'use strict';

  var $body;
  var $total = 0;
  var $numTotal;

  $(document).ready(function(evt){
    $('#submit').click(getStock);
    $('table').on("click", '.remove', function(){
    $(this).parent().parent().remove();
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
    }else{
      var url = makeStockUrl();
      $.getJSON(url, function (response) {
        display(response);
        console.log(response);
      });
    }
   	clear();
  }

  function clear(){
  	$('input.symbol')[0].value = "";
  	$('input.quantity')[0].value = "";
  }

  function display(stock){

    var priceChange   = Math.round(stock.Change*100)/100;
    var percentChange = Math.round(stock.ChangePercent*100)/100;
    var quantityVal   = $('.quantity').val();
    $total            = $total + (quantityVal * (stock.LastPrice));
    $total            = Math.round($total*100)/100;
    $numTotal         = $('<h3> TOTAL: $' + $total +  '</h3>');

    var $tr = $('<tr></tr>');

    var $tdCompany = $('<td></td>');
    $tdCompany.text(stock.Name);
    $tr.append($tdCompany);

    var $tdPrice = $('<td></td>');
    $tdPrice.text("$" + stock.LastPrice);
    $tr.append($tdPrice);

    var $tdQuantity = $('<td></td>');
    $tdQuantity.text(quantityVal);
    $tr.append($tdQuantity);

    var $tdDayPrice = $('<td></td>');
    $tdDayPrice.text("$" + priceChange);
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
