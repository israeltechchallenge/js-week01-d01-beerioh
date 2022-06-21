function moduloEx5(fnumber, snumber ) {
  const pnumber = fnumber % snumber;
  let stringVar;
  if (fnumber > snumber && (pnumber != 0))
  {
    stringVar = (`The number ${fnumber} is bigger than ${snumber}. But the modulo of ${fnumber} % ${snumber} is ${pnumber}`)
  }
  else if (fnumber > snumber )
  {
    stringVar =  (`The number ${fnumber} is bigger than ${snumber}`)
  }
  else if (fnumber === snumber)
  {
    stringVar = (`The number ${fnumber} is equal to ${snumber}`)
  }
  else if (fnumber < snumber)
  {
    stringVar = (`The number ${fnumber} is less than ${snumber}`)
  }
  console.log(stringVar)
}

// Do not remove or change this line, or the tests won't work
export { moduloEx5 };
