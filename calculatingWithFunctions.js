/*This time we want to write calculations using functions and get the results. 
Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3

Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: 
plus, minus, times, dividedBy (divided_by in Ruby and Python)
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function 
represents the right operand
Divison should be integer division. For example, this should return 2, not 
2.666666...:
eight(dividedBy(three()));*/

/*function zero(operation) {
  if (operation) {
    const calc = operation.split(' ');
    switch (calc[0]) {
      case '+': return 0 + parseInt(calc[1]);
      case '-': return 0 - parseInt(calc[1]);
      case '*': return 0 * parseInt(calc[1]);
      case '/': return parseInt(0 / parseInt(calc[1]));
    }
  } else return '0';
}
function one(operation) {
  if (operation) {
    const calc = operation.split(' ');
    switch (calc[0]) {
      case '+': return 1 + parseInt(calc[1]);
      case '-': return 1 - parseInt(calc[1]);
      case '*': return 1 * parseInt(calc[1]);
      case '/': return parseInt(1 / parseInt(calc[1]));
    }
  } else return '1';
}
function two(operation) {
  if (operation) {
    const calc = operation.split(' ');
    switch (calc[0]) {
      case '+': return 2 + parseInt(calc[1]);
      case '-': return 2 - parseInt(calc[1]);
      case '*': return 2 * parseInt(calc[1]);
      case '/': return parseInt(2 / parseInt(calc[1]));
    }
  } else return '2';
}
function three(operation) {
  if (operation) {
    const calc = operation.split(' ');
    switch (calc[0]) {
      case '+': return 3 + parseInt(calc[1]);
      case '-': return 3 - parseInt(calc[1]);
      case '*': return 3 * parseInt(calc[1]);
      case '/': return parseInt(3 / parseInt(calc[1]));
    }
  } else return '3';
}
function four(operation) {
  if (operation) {
    const calc = operation.split(' ');
    switch (calc[0]) {
      case '+': return 4 + parseInt(calc[1]);
      case '-': return 4 - parseInt(calc[1]);
      case '*': return 4 * parseInt(calc[1]);
      case '/': return parseInt(4 / parseInt(calc[1]));
    }
  } else return '4';
}
function five(operation) {
  if (operation) {
    const calc = operation.split(' ');
    switch (calc[0]) {
      case '+': return 5 + parseInt(calc[1]);
      case '-': return 5 - parseInt(calc[1]);
      case '*': return 5 * parseInt(calc[1]);
      case '/': return parseInt(5 / parseInt(calc[1]));
    }
  } else return '5';
}
function six(operation) {
  if (operation) {
    const calc = operation.split(' ');
    switch (calc[0]) {
      case '+': return 6 + parseInt(calc[1]);
      case '-': return 6 - parseInt(calc[1]);
      case '*': return 6 * parseInt(calc[1]);
      case '/': return parseInt(6 / parseInt(calc[1]));
    }
  } else return '6';
}
function seven(operation) {
  if (operation) {
    const calc = operation.split(' ');
    switch (calc[0]) {
      case '+': return 7 + parseInt(calc[1]);
      case '-': return 7 - parseInt(calc[1]);
      case '*': return 7 * parseInt(calc[1]);
      case '/': return parseInt(7 / parseInt(calc[1]));
    }
  } else return '7';
}
function eight(operation) {
  if (operation) {
    const calc = operation.split(' ');
    switch (calc[0]) {
      case '+': return 8 + parseInt(calc[1]);
      case '-': return 8 - parseInt(calc[1]);
      case '*': return 8 * parseInt(calc[1]);
      case '/': return parseInt(8 / parseInt(calc[1]));
    }
  } else return '8';
}
function nine(operation) {
  if (operation) {
    const calc = operation.split(' ');
    switch (calc[0]) {
      case '+': return 9 + parseInt(calc[1]);
      case '-': return 9 - parseInt(calc[1]);
      case '*': return 9 * parseInt(calc[1]);
      case '/': return parseInt(9 / parseInt(calc[1]));
    }
  } else return '9';
}

function plus(number) {
  return `+ ${number}`;
}
function minus(number) {
  return `- ${number}`;
}
function times(number) {
  return `* ${number}`;
}
function dividedBy(number) {
  return `/ ${number}`;
}*/

function zero(operation) {}
function one(operation) {}
function two(operation) {}
function three(operation) { return operation ? operation(3) : 3 }
function four(operation) {}
function five(operation) {}
function six(operation) {}
function seven(operation) {}
function eight(operation) { return operation ? operation(8) : 8 }
function nine(operation) {}

function plus(right) { return left => { return left + right } }
function minus(right) { return left => { return left - right } }
function times(right) { return left => { return left * right } }
function dividedBy(right) { return left => { return parseInt(left / right) } }

console.log(eight(plus(three())));
console.log(eight(minus(three())));
console.log(eight(times(three())));
console.log(eight(dividedBy(three())));