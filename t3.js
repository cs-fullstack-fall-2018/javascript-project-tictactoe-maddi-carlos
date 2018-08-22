var playerOne = "X";
var playerTwo = "O";
var score = {
    'X': 0,
    'O': 0
};
var gridvalue = 0;


// Setup your Variables

// Handle Restart game button

// Grab all the play spaces in the board
var spaces = document.querySelectorAll("td");

for (var x = 0; x < 9; x++) {
    spaces[x].addEventListener("click", function () {
        if (this.innerText ==="") {
            this.innerText = playerOne;
            checkWinner();

            switch (playerOne) {
                case 'X':
                    playerOne = "O";
                    break;
                case 'O':
                    playerOne = "X";
                    break;
            }
        }
        // var row1 = document.getElementById("row1");
        // console.log(row1.innerText);
        // if (row1.innerText = "X"){
        //     alert("Player 1 Wins!")
        //
        // }


    });

}

function checkWinner() {
    if (spaces[0].textContent === spaces[1].textContent && spaces[1].textContent === spaces[2].textContent && spaces[2].textContent === "X" ||
        spaces[3].textContent === spaces[4].textContent && spaces[4].textContent === spaces[5].textContent && spaces[5].textContent === "X" ||
        spaces[6].textContent === spaces[7].textContent && spaces[7].textContent === spaces[8].textContent && spaces[8].textContent === "X" ||
        spaces[0].textContent === spaces[3].textContent && spaces[3].textContent === spaces[6].textContent && spaces[6].textContent === "X" ||
        spaces[1].textContent === spaces[4].textContent && spaces[4].textContent === spaces[7].textContent && spaces[7].textContent === "X" ||
        spaces[2].textContent === spaces[5].textContent && spaces[5].textContent === spaces[8].textContent && spaces[8].textContent === "X" ||
        spaces[2].textContent === spaces[4].textContent && spaces[4].textContent === spaces[6].textContent && spaces[6].textContent === "X" ||
        spaces[0].textContent === spaces[4].textContent && spaces[4].textContent === spaces[8].textContent && spaces[8].textContent === "X")
    {
        alert("X wins");
    }
        if (spaces[0].textContent === spaces[1].textContent && spaces[1].textContent === spaces[2].textContent && spaces[2].textContent === "O" ||
            spaces[3].textContent === spaces[4].textContent && spaces[4].textContent === spaces[5].textContent && spaces[5].textContent === "O" ||
            spaces[6].textContent === spaces[7].textContent && spaces[7].textContent === spaces[8].textContent && spaces[8].textContent === "O" ||
            spaces[0].textContent === spaces[3].textContent && spaces[3].textContent === spaces[6].textContent && spaces[6].textContent === "O" ||
            spaces[1].textContent === spaces[4].textContent && spaces[4].textContent === spaces[7].textContent && spaces[7].textContent === "O" ||
            spaces[2].textContent === spaces[5].textContent && spaces[5].textContent === spaces[8].textContent && spaces[8].textContent === "O" ||
            spaces[2].textContent === spaces[4].textContent && spaces[4].textContent === spaces[6].textContent && spaces[6].textContent === "O" ||
            spaces[0].textContent === spaces[4].textContent && spaces[4].textContent === spaces[8].textContent && spaces[8].textContent === "O")
        {
            alert("O wins");
    }}



// Setup click handlers for each play space on the board

// Handle a play space being clicked

// Switch player turn

// Check for winner or CAT/tie




