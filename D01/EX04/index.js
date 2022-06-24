function modulo(verA , verB) {

  let modulor = verA % verB;
  let module = (`The modulo of ${verA} % ${verB} is ${modulor}`)
  
  if (verA > verB &&  verA % verB != 0)
  {
    console.log(`The number ${verA} is bigger than ${verB}`);
    console.log(module)
  }
  else if (verA > verB)
  {
    console.log(`The number ${verA} is bigger than ${verB}`);
   
  }
  else if (verA === verB)
  {
    console.log(`The number ${verA} is equal to ${verB}`);
  }
  else if (verA < verB)
  {
    console.log(`The number ${verA} is less than ${verB}`);
  }
}



// Do not remove or change this line, or the tests won't work
export { modulo };
