// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

function generateHashtag(str) {
  const hashtaggedString = ['#'];

  if (str.split(' ').join('') != '') {
    str.split(/  */).map(word => {
      hashtaggedString.push(word[0].toUpperCase() + word.substr(1));
    });
    let hashtag = hashtaggedString.join('');

    return hashtag.length <= 140 ? hashtag : false;
  } else return false;
}

console.log(generateHashtag("code" + " ".repeat(140) + "wars"));