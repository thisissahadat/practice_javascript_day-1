//with > ' ' this cotation numbers have been converted to string so total price should make addition like strings
// the result will turn like strings and make result 3050 rather being 30+15=45. so its variable need to be converted to number.
// var price1='30';
// var price2='15';
// var totalprice =price1 + price2;
// console.log(totalprice);


var price1='30';
var price2='15';
var price1number=parseInt(price1);
var price2number=parseInt(price2); //with these variable conversion the result will deliver proper number addition 45.

var totalprice =price1number+ price2number;
console.log(totalprice);
