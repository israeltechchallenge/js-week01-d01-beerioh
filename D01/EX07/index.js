let randomNumber;
function getRandomInt() {
  randomNumber = parseInt(Math.random(randomNumber) * 100);
  return randomNumber;
}

// let randomNumber1 = randomNumber;
// let randomNumber2 = randomNumber;

let h3Tag = document.getElementById('output');
let stringVar = '';

function moduloEx7(firstParameter, secondParameter) {
  const moduloVar = firstParameter % secondParameter;
  if (firstParameter > secondParameter && moduloVar != 0) {
    stringVar = `The number ${firstParameter} is bigger than ${secondParameter}. But the modulo of ${firstParameter} % ${secondParameter} is ${moduloVar}`;
  } else if (firstParameter > secondParameter) {
    stringVar = `The number ${firstParameter} is bigger than ${secondParameter}`;
  } else if (firstParameter === secondParameter) {
    stringVar = `The number ${firstParameter} is equal to ${secondParameter}`;
  } else if (firstParameter < secondParameter) {
    stringVar = `The number ${firstParameter} is less than ${secondParameter}`;
  }
  h3Tag.innerText = stringVar;
} //your code

// In D01/EX07, create a website that runs the JS attached file. In that file, edit the function provided. Use as template your previous function. Add a new function that randomize the values of your two variables, using Math.random(), with the range of 1 - 100. Call to that function inside the other one instead of providing two parameters. This exercise does not have an automated test. Run it in your browser, and check the results.

console.log(moduloEx7(getRandomInt(), getRandomInt()));

