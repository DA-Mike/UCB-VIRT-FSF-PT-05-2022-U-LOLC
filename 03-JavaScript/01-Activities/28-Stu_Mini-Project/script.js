// //alert

// alert("Welcome to the Rock, Paper, Scissors game!");

// //input prompt
// var promptVal = prompt("Pick a letter (r, p, s)");

// function promptFunction() {
//     if (promptVal == "r") {
//         rps(promptVal);
//     } else if (promptVal == "s") {
//         rps(promptVal);
//     } else if (promptVal == "p"){
//         rps(promptVal);
//     } else {
//         alert("You did not choose a correct value.");
//         promptVal;
//     }
//     return;
// }

// var hand = ["r", "p", "s"];

// var scoreCard = {
//     you: 0,
//     computer: 0,
//     ties: 0,
// }

// function rps() {
//     promptVal = promptVal.toLowerCase;
//     compChoice = hand[Math.floor(Math.random() * hand.length)];
//     if (promptVal === 'r') { //rock
//         if (compChoice === 'p') {
//             ++scoreCard.computer;
//             confirm("You lose! Play again?");
//         } else if (compChoice === 's'){
//             ++scoreCard.you;
//             confirm("Yous win! Play again?");
//         } else {
//             ++scoreCard.ties;
//             confirm("It's a tie! Play again?");
//         } 
//     } else if (promptVal === 'p') { //papaer
//         if (compChoice === 's') {
//             ++scoreCard.computer;
//             confirm("You lose! Play again?");
//         } else if (compChoice === 'r') {
//             ++scoreCard.you;
//             confirm("You win! Play again?");
//         } else {
//             ++scoreCard.ties;
//             confirm("It's a tie! Play again?");
//         }
//     } else { //scissors
//         if (compChoice === "r") {
//             ++scoreCard.computer;
//             confirm("You lose! Play again?");
//         } else if (compChoice === "p") {
//             ++scoreCard.you;
//             confirm("You win! Play again?");
//         } else {
//             ++scoreCard.ties;
//             confirm("It's a tie! Play again?")
//         }
//     }
// }

// promptFunction(promptVal);

//confirm -> calls rps function

// var playersChoice = input



//rps function

    //stores input to variable (global or local?)

    //use 'random' method to have function select opponent's
    //choice (ie var game = ['r', 'p', 's']);

    //selection = rand(game)

    //compare player's choice vs opponent's choice

    //output winner and message in modal 
        //(if, elseif, elseis, else)
    
    //store score for session

    var wins = 0;
    var ties = 0;
    var losses = 0;
    
    // Array of options for computer to pick from
    var options = ["R", "P", "S"];
    
    var playGame = function() {
      // Ask user for their choice
      var userChoice = window.prompt("Enter R, P, or S:");
    
      // If user pressed Cancel, immediately end function
      if (!userChoice) {
        return;
      }
    
      // Convert to uppercase to make comparisons easier
      userChoice = userChoice.toUpperCase();
    
      // Get random index from array of options
      var index = Math.floor(Math.random() * options.length);
      var computerChoice = options[index];
    
      window.alert("The computer chose " + computerChoice);
    
      // If choices are the same, it's a tie
      if (userChoice === computerChoice) {
        ties++;
        window.alert("It's a tie!");
    
      // Check every win condition for the player
      } else if (
        (userChoice === "R" && computerChoice === "S")||  
        (userChoice === "P" && computerChoice === "R") || 
        (userChoice === "S" && computerChoice === "P")
      ) {
        wins++;
        window.alert("You win!");
    
      // If above conditions failed, assume player lost
      } else {
        losses++;
        window.alert("You lost!");
      }
    
      // Print stats with line breaks
      window.alert(
        "Stats:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties
      );
    
      // Ask user to play again
      var playAgain = window.confirm("Play again?");
    
      // If user pressed OK, run the function again
      if (playAgain) {
        playGame();
      }
    };
    
    // Run the game for the first time
    playGame();
    
    
    
    
    

