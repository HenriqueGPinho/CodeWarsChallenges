/*Write a function called that takes a string of parentheses, and determines if 
the order of the parentheses is valid. The function should return true if the 
string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
*/

function validParentheses(parens){
  const pArray = parens.split('');
  let balance = 0;
  let unbalanced = false;
  
  if (pArray.length == 0) return true;
  // according to the tests, it seems the function has to return true when 
  // there isn't parameters being given, but it isn't mentioned

  pArray.map(paren => {
    if (paren == '(') balance ++;
    if (paren == ')') balance --;

    if (balance <= -1) unbalanced = true;
    // if balance reaches -1, it means there is some ) without a correspondent (
    // before it
  });

  if (pArray[0] == '(' 
    && pArray[pArray.length - 1] == ')' 
    && balance == 0
    && !unbalanced) return true;
  else return false;
}

console.log(validParentheses('())(()'));