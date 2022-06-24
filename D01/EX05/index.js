function moduloEx5(verA, verB) {
  
const a = (`The number ${verA} is bigger than ${verB}`)
const c = (`The number ${verA} is equal to ${verB}`)
const d = (`The number ${verA} is less than ${verB}`)
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
  console.log(result);
}

// Do not remove or change this line, or the tests won't work
export { moduloEx5 };

