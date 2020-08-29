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
  let balance = 0;

  for (let i = 0; i < parens.length; i++) {
    if (parens[i] == '(') balance ++;
    if (parens[i] == ')') balance --;
  
    if (balance <= -1) return false;
    // if balance reaches -1, it means there is some ) without a correspondent (
    // before it
  }
  
  return balance == 0;
}

console.log(validParentheses('())(()'));