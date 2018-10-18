function forLoop(array) {
  for(var i = 0; i < 25; i++) {
    if (i === 1) {
      array.push("I am 1 strange loop.");
    } else {
      array.push(`I am ${i} strange loops.`);
    }
  }
  return array;
}

function whileLoop(number) {
  while(number > 0) {
    console.log(number);
    number -= 1;
  }
  return "done"
}

var i = 10

function incrementVariable() {
  i -= 1;
}

function doWhileLoop(array) {
  do {
    array.shift()
  } while(array.length > 0 || incrementVariable())
}