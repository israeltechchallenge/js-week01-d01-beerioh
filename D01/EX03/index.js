
  /* if (fnumber > snumber)
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
This function should accept two parameters instead of one, where the first one is the number to be compared and the second one the one to compare with. You need to compare the numbers, and according to the right situation print in the console: 'The number X is bigger than Y' or 'The number X is less than Y' or 'The number X is equal to Y'. To test this exercise run: npm run testex3
*/
function compareNumbers(verA, verB) {
  if (verA > verB)
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
export { compareNumbers };
