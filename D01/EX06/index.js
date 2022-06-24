
function moduloEx6(verA, verB) {
    
const a = (`The number ${verA} is bigger than ${verB}`)
const c = (`The number ${verA} is equal to ${verB}`)
  const d = (`The number ${verA} is less than ${verB}`)
  
  //input = document.getElementById(input)
let modulor = verA % verB;
const module = (`But the modulo of ${verA} % ${verB} is ${modulor}`)
  let result = "0";  
  if (verA > verB &&  verA % verB != 0)
  {
    result = (`${ a }. ${ module }` );
  }
  else if (verA > verB)
  {
     result = (a);
  }
  else if (verA === verB)
  {
     result = (c);
  }
  else if (verA < verB)
  {
     result = (d);
  }

  
    document.getElementById("output").innerText = `${result}`;

}



moduloEx6(3, 3);

//  In that file, edit the function provided. Use as template your previous function. Instead of logging a string to the console,  change the text of the tag according to the logic you implemented. This exercise does not have an automated test. Run it in your browser, and check the results.