(function(){
  'use strict';

  var total = 0;
  var $refreshButton = $('.refresh');

  $(document).ready(function(evt){
    $('#submit').click(getStock);
    $('table').on('click', '.remove', function(){
      var $tr = $(this).parent().parent();
      var price = $tr.children('.price').text().substr(1);
      var qty = $tr.children('.quantity').text();
      var salePrice = price * qty * -1;
      currentTotal(salePrice);
      $tr.remove();
    });
  });

  $refreshButton.on('click', function(evt){
    evt.preventDefault();
    console.log(evt);
    refreshCurrPrice();
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

    var $tr = $('<tr class="tableRow"></tr>');

    var $tdCompany = $('<td class="name"></td>');
    $tdCompany.text(stock.Name);
    $tr.append($tdCompany);

    var $tdPrice = $('<td class="price"></td>');
    $tdPrice.text("$" + stock.LastPrice);
    $tr.append($tdPrice);

    var $tdQuantity = $('<td class="quantity"></td>');
    $tdQuantity.text(quantityVal);
    $tr.append($tdQuantity);

    var $tdCurrPrice = $('<td class="currentPrice"></td>');
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

  function refreshCurrPrice(){
    var $tr = $('.tableRow');

    _.forEach($tr, function(n){
      var row = $(n);
      var foundName = row.find('.name')[0].innerHTML;
      var url = 'http://dev.markitondemand.com/Api/v2/Lookup/jsonp?input=' + foundName + '&callback=?';

      $.getJSON(url, function(currPrice){
        var ticker = currPrice[0].Symbol;

        var urlSymbol = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=' + ticker + '&callback=?';

        $.getJSON(urlSymbol, function(res){
          row.find('.currentPrice')[0].innerHTML = parseFloat(res.LastPrice);
        });
      });
    });
   }

})();
