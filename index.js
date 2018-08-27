// Code your solutions in this file
function printBadges(arrayOfNames) {
  for (let i = 0; i < arrayOfNames.length; i++) {
    console.log(`Welcome ${arrayOfNames[i]}! You are employee #${i + 1}.`)
  }

  return arrayOfNames;
}

function tailsNeverFails() {
  let tailsCount = 0

  while (Math.random() >= 0.5) {
    tailsCount += 1
  }

  return `You got ${tailsCount} tails in a row!`
}
