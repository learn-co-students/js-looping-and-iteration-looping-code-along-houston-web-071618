// Code your solutions in this file
function printBadges(array)
{
  for(let x =0; x<array.length; x++)
  {
    console.log(`Welcome ${array[x]}! You are employee #${x+1}.`);
    // use ` instead of ' when you want to have embedded values
  }
  return array;
}

function tailsNeverFails()
{
  let tailCounter = 0

  while(Math.random() >= .5)
  {
    tailCounter++
  }
  return `You got ${tailCounter} tails in a row!`
}
