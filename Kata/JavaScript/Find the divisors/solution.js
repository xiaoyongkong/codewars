function divisors(integer) {
  divisorsNumbers = [];
  var response = integer + " is prime"
  if (integer === 0) return "Not valid";
  if (integer === 1) return response;
  for(var i = 2; i < integer; i++){
    if (integer%i == 0) divisorsNumbers.push(i);
  }
  if (divisorsNumbers.length == 0) return response
  else return divisorsNumbers;
  
};