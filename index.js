// Code your solutions in this file
function printBadges(names) {
  for (const name in names) {
    console.log(
      `Welcome ${names[name]}! You are employee #${parseInt(name) + 1}.`
    );
  }
  return names;
}

function tailsNeverFails() {
  let tails = 0;
  while (Math.random() >= 0.5) {
    tails++;
  }
  return `You got ${tails} tails in a row!`;
}
