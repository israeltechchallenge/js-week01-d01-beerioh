let h3Tag = document.getElementById('output');
let stringVar = '';

function moduloEx6(firstParameter, secondParameter) {
  
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
} 
moduloEx6(8, 3);
