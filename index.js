// Code your solutions in this file
function printBadges(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`Welcome ${array[i]}! You are employee #${i+1}.`)
  }
  return array
}

function tailsNeverFails() {
  let result = "tails"
  let tailCount = -1

  while (result == "tails") {
    result = Math.random() < 0.5 ? "heads" : "tails"
    tailCount++
  }

  return `You got ${tailCount} tails in a row!`
}
