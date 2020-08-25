/*Move the first letter of each word to the end of it, then add "ay" to the end 
of the word. Leave punctuation marks untouched.*/

function pigIt(str){
  const splitWords = str.split(' ');
  const newWords = [];

  splitWords.map(word => {
    if (word.toUpperCase() != word.toLowerCase()) {
      const splitLetters = word.split('');
      const firstLetter = splitLetters[0];
      
      for (let i = 0; i < word.length; i++) {
        i < splitLetters.length - 1 
          ? splitLetters[i] = splitLetters[i+1]
          : splitLetters[i] = firstLetter;
      }
      splitLetters.push('ay');
      newWords.push(splitLetters.join(''));
    } else {
      newWords.push(word);
    }
  });

  return newWords.join(' ');
}

console.log(pigIt('Pig latin is cool !'));