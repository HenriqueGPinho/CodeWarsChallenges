/*Write a function that takes in a string of one or more words, and returns the 
same string, but with all five or more letter words reversed (Just like the name 
of this Kata). Strings passed in will consist of only letters and spaces. 
Spaces will be included only when more than one word is present.

Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" spinWords( "This is 
another test" )=> returns "This is rehtona test"*/

function spinWords(phrase) {
  const words = phrase.split(' ');
  const spinnedPhrase = [];
  const finalPhrase = [];
  
  words.map(word => {
    const splitWord = word.split('');
    let spinnedWord = [];

    if (word.length >= 5) {
      for (let i = 0; i <= word.length; i++) {
        spinnedWord[i] = splitWord[word.length - i];
      }
    } else spinnedPhrase.push(word);

    spinnedPhrase.push(spinnedWord.join(''));
  });

  for (let i = 0; i < spinnedPhrase.length; i++) {
    if (spinnedPhrase[i] != ''){
      finalPhrase.push(spinnedPhrase[i]);
    }
  }

  return finalPhrase.join(' ');
}

console.log(spinWords("Programming is Awesome"));