// Code your solutions in this file


function printBadges(array){
  for (let i =0; i<array.length; i++){
    let message = `Welcome ${array[i]}! You are employee #${i+1}.`;
    console.log(message);
  }
  return array
}

function tailsNeverFails(){

    let i = 0;
    while (Math.random() >= 0.5){
      i++;
    }
    console.log(`You got ${i} tails in a row!`);
    return(`You got ${i} tails in a row!`);

}
