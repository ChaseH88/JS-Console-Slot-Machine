// Console Slot Machine!!!!

// run the code when the window is loaded
window.onload = function(){

  // Complexity Settings
  let difficulty = 3; // the higher the number, the harder it is to win!

  // times won and lost - OPTIONAL
  let [won, lost] = [0, 0];

  // grab the html elements
  const slot = document.querySelector("#slotMachine"); // grab the slot machine id
  const play = slot.querySelector("button.play"); // grab the button inside the slot machine

  // Add the event to the button
  play.addEventListener("click", playSlot);

  function playSlot(){
    console.clear();
    // Go get us some winning nums!!!
    let winningNums = generateWinners();
    console.log(`------\n${winningNums}\n------`) // show the slot machine in the console!!!
    
    // ---check to see if you won---
    let win = checkWin(winningNums); // this function will give us a boolean so now we can use it to show a message!

    // ternary to show a message to the user
    win ?
      console.log("Congratulations, you win!!!") :
      console.log("No Winners");
    
    // EXTRA FUNCTION, SIMPLY FOR FUN IF YA WANT!
    // doSomeMoreStuff(winningNums, win);
  }

  function generateWinners(){
    // this will hold our winning nums
    let numbers = [0, 0, 0];
    let winners = numbers.map(n => {
      // numbers between 0 and 3;
      return Math.floor(Math.random() * difficulty);
    });
    // give the array back to playSlot
    return winners;
  }

  function checkWin(winningNums){
    // grab the first num to check against the others
    let first = winningNums[0];
    //run a loop to increment through each
    for(let num of winningNums){
      // if its not equal, return back false
      if(first !== num){
        return false;
      }
    }
    // if the loop runs without meeting the condition, the numbers match so return true.
    return true;
  }

  // ----- EXTRA -----
  // function doSomeMoreStuff(winningNums, win){
  //   let docTitle = "Slot Machine";
  //   document.querySelector("#numbers").innerHTML = `
  //     <div>
  //       ${winningNums.join("")}
  //     </div>`;

  //   // if win === true
  //   if(win){
  //     document.body.classList.add("winner");
  //     document.title = `WINNER!!! - ${docTitle}`
  //     won++
  //     document.querySelector("span.won").innerHTML = `
  //       Times Won: <strong>${won}</strong>
  //     `;
  //   } else {
  //     document.body.classList.remove("winner");
  //     document.title = docTitle;
  //     lost++
  //     document.querySelector("span.lost").innerHTML = `
  //       Times Lost: <strong>${lost}</strong>
  //     `;
  //   }
  //   document.querySelector("span.totalSpins").innerHTML = `
  //     Total Times Played: <strong>${won + lost}</strong>
  //   `;
  // }

}