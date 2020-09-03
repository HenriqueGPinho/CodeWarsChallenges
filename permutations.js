// In this kata you have to create all permutations of an input string and 
// remove duplicates, if present. This means, you have to shuffle all letters 
// from the input in all possible orders.

// Examples:

// permutations('a'); // ['a']
// permutations('ab'); // ['ab', 'ba']
// permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
// The order of the permutations doesn't matter.
//------------------------------------------------------------------------------

// ideia: separar o primeiro item -> com os itens restantes
function permutations(string) {
  const result = [];

  if (string.length == 1) {
    result.push(string);
    return result;
  }

  for (let i = 0; i < string.length; i++) {
    const fixedChar = string[i];
    const otherChars = string.substr(0, i) + string.substr(i + 1);
    const newPermutation = permutations(otherChars);

    for (let j = 0; j < newPermutation.length; j++) {
      if (result.indexOf(fixedChar + newPermutation[j]) === -1) {
        result.push(fixedChar + newPermutation[j]);
      }
    }
  }
  return result;
}

console.log(permutations('aabb'));