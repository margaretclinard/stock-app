var input = 'AAPL';
var url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=' + input + '&callback=?';

$.getJSON(url, function (response) {
  console.log(response);
});


