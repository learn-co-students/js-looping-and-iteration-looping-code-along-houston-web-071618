// Code your solutions in this file
arr = ['Lisa', 'Kaitlin', 'Jan'];

function printBadges(arr) {
  for (let i = 0; i < arr.length; i++ ){
      console.log(`Welcome ${arr[i]}! You are employee #${i+1}.`)
  }
  return arr
}
printBadges(arr)


// If the condition evaluates to true, the coin landed on 'Tails' and is flipped again. If the condition evaluates to false, the coin landed on 'Heads', and the 'Tails' streak is broken.

function tailsNeverFails () {
  // set initial value to 0
  let tails = 0

  // while random is greater than .5
  while (Math.random() >= 0.5) {
    // add tails 
    tails +=1
  }
    console.log(`You got ${tails} tails in a row!`);
  }

tailsNeverFails()
