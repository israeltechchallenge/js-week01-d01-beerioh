function isBiggerThan(number) {
  
  if (number > 4)
  {
   console.log(`The number ${number} is bigger than 4`) 
  }
  else if (number === 4)
  {
    console.log(`The number ${number} is equal to 4`)
  }
  else if (number < 4)
  {
    console.log(`The number ${number} is less than 4`)
  }
  /*
  That function, should accept one parameter (do not call it x, y.. Give it a real name). The code should print to the console “The number Y is bigger than 4” when the number is bigger than 4, or “the number Y is equal to 4” when the number is equal to 4, or “the number Y is less than 4” when the number is less than 4 (where Y is the value of your variable). Change the value to your variable, and check if you get the right output every time (do not forget to refresh the page after you change your code). To test this exercise run: npm run testex2*/

}


// Do not remove or change this line, or the tests won't work
export { isBiggerThan };
