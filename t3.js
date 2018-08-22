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

//console.log(spaces.length);
for (var x = 0; x < spaces.length; x++) {
    spaces[x].addEventListener("click", function () {
        this.innerText = playerOne;

        console.log("X test: " + x);
        switch (playerOne) {
            case 'X':
                playerOne = "O";
                break;
            case 'O':
                playerOne = "X";
                break;
        }
    });


    console.log("PlayerOne is now: " + playerOne);
}

// function playerSwitch () {
//     if (this.innerText = playerOne) {
//         this.innerText = playerTwo;
//     }
//     else if (this.innerText = playerTwo) {
//         this.innerText = playerOne;
//     }
//}


// Clear all the play spaces in the board

// Setup click handlers for each play space on the board

// Handle a play space being clicked

// Switch player turn

// Check for winner or CAT/tie




