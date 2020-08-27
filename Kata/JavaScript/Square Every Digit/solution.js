function squareDigits(num){
  //may the code be with you
  num = num.toString().split('');
  var result = [];
  
  for(var i = 0; i < num.length; i++){
    result.push(num[i] * num[i]);
  }
  return parseInt(result.join(''));
}