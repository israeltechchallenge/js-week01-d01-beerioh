function compareNumbers(fnumber , snumber) {
    if (fnumber > snumber)
  {
   console.log(`The number ${fnumber} is bigger than ${snumber}`) 
  }
  else if (fnumber === snumber)
  {
    console.log(`The number ${fnumber} is equal to ${snumber}`)
  }
  else if (fnumber < snumber)
  {
    console.log(`The number ${fnumber} is less than ${snumber}`)
  }
}

// Do not remove or change this line, or the tests won't work
export { compareNumbers };
