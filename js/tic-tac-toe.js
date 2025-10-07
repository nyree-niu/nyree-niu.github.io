console.log("Welcome to Tic-Tac-Toe! Enjoy!")



let noughtsTurn = true

let gameIsOver

let filledCount = 0


//create a new array of all the <td> tags and named the array "cells" 
let cells = document.getElementsByTagName("TD")

//return the cells's length//
console.log(cells.length)

//build click handler, or a function of when i click something, something happens//
function clickClick() {
    for(let i=0;i< cells.length;i++){
      cells[i].onclick = cellClicked
    } 
  } 
clickClick(); //*** don't forget calling the function //



function cellClicked(e) {
//declare a variable for the clicked cell, "e" stands for event//  
      if (gameIsOver) return

      let cell = e.target
      
      // let emptyCell= [...cells].find(cell => cell.innerHTML==="")

      if(cell.innerHTML === ""){
        let symbol = noughtsTurn ? "O" : "X"
        cell.innerHTML=symbol
        NewCount = filledCount++;

        if (checkForWin(symbol)){
          gameIsOver=true
          return
        }
        noughtsTurn = !noughtsTurn //toggle, if noughtsTurn was true, it becomes false; if noughtsTure was false, it becomes true //
        
      
        gameIsOver ? subtitle.innerHTML=(symbol) +" Wins!! 😎 🎉": filledCount===9 ?
       subtitle.innerHTML = "It's a TIE!! 🤝 😅 " : subtitle.innerHTML = (noughtsTurn ? "O" : "X") + "'s turn";
      }
} 




function checkForWin(symbol){
  
      if(cells[0].innerHTML == symbol &&
         cells[1].innerHTML == symbol &&
         cells[2].innerHTML == symbol) {
              gameIsOver = true;
              
      } else if(
          cells[3].innerHTML == symbol &&
          cells[4].innerHTML == symbol &&
          cells[5].innerHTML == symbol) {
              gameIsOver = true;
             
} else if(
          cells[6].innerHTML == symbol &&
          cells[7].innerHTML == symbol &&
          cells[8].innerHTML == symbol) {
              gameIsOver = true;

} else if(
          cells[0].innerHTML == symbol &&
          cells[3].innerHTML == symbol &&
          cells[6].innerHTML == symbol) {
              gameIsOver = true;

} else if(
          cells[1].innerHTML == symbol &&
          cells[4].innerHTML == symbol &&
          cells[7].innerHTML == symbol) {
              gameIsOver = true;

} else if(
          cells[2].innerHTML == symbol &&
          cells[5].innerHTML == symbol &&
          cells[8].innerHTML == symbol) {
              gameIsOver = true;
              
} else if(
          cells[0].innerHTML == symbol &&
          cells[4].innerHTML == symbol &&
          cells[8].innerHTML == symbol) {
              gameIsOver = true;

 } else if(
          cells[2].innerHTML == symbol &&
          cells[4].innerHTML == symbol &&
          cells[6].innerHTML == symbol) {
              gameIsOver = true; 
             
} else {
  gameIsOver = false; 
}

}




//add a button to trigger the clearCells function, and reset to original setting//
document.getElementById("restart").onclick = clearCells

function clearCells(){
for(let i=0;i< cells.length;i++){
        cells[i].innerHTML="";
    } 
    gameIsOver=false;
    noughtsTurn=true;
    subtitle.innerHTML="Click on a cell to start!";
    filledCount=0
}