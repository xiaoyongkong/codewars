function alphabetPosition(text) {
  var letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
              "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v",
              "w", "x", "y", "z"];
              
  var textArray = text.toLowerCase().replace(/[^a-z]/g, '').split('').filter(entry => entry.trim() != '');
  for (var i = 0; i < textArray.length; i++){
    for(var j = 0; j < letter.length; j++){
      if(letter[j] == textArray[i]) textArray[i] = j + 1; 
    }
  }
  return textArray.join(' ');
}