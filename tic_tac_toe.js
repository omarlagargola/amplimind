const prompt = require('prompt-sync')({sigint: true})

const validInputRegExp = /[1-3]:[1-3]/;
let player = 'X';
let endGame = false;
function genericPrompt() {
  return `${player}: Please enter the position of your mark (Row:Column): `;
};
let wins = {
  X: 0,
  O: 0
};
let promptMessage = genericPrompt();
let movesNumber = 0;
let grid = initialGrid();

function initialGrid() {
  return [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ]
}

function initializeGameData() {
  promptMessage = genericPrompt();
  movesNumber = 0;
  grid = initialGrid();
}

function changePlayer() {
  player = player === 'O' ? 'X' : 'O';
}

function drawGrid() {
  console.log(` ${grid[0][0] || ' '} | ${grid[0][1] || ' '} | ${grid[0][2] || ' '} `);
  console.log('-----------');
  console.log(` ${grid[1][0] || ' '} | ${grid[1][1] || ' '} | ${grid[1][2] || ' '} `);
  console.log('-----------');
  console.log(` ${grid[2][0] || ' '} | ${grid[2][1] || ' '} | ${grid[2][2] || ' '} `);
}

function solutions() {
  return (
    (grid[0][0] && grid[0][0] === grid[0][1] && grid[0][1] === grid[0][2]) ||
    (grid[1][0] && grid[1][0] === grid[1][1] && grid[1][1] === grid[1][2]) ||
    (grid[2][0] && grid[2][0] === grid[2][1] && grid[2][1] === grid[2][2]) ||
    (grid[0][0] && grid[0][0] === grid[1][0] && grid[1][0] === grid[2][0]) ||
    (grid[0][1] && grid[0][1] === grid[1][1] && grid[1][1] === grid[2][1]) ||
    (grid[0][2] && grid[0][2] === grid[1][2] && grid[1][2] === grid[2][2]) ||
    (grid[0][0] && grid[0][0] === grid[1][1] && grid[1][1] === grid[2][2]) ||
    (grid[0][2] && grid[0][2] === grid[1][1] && grid[1][1] === grid[2][0])
  );
}

function playTicTacToe() {
  while(movesNumber < 9){
    console.clear();
    drawGrid();
    let input = prompt(promptMessage);
    if (!validInputRegExp.test(input)){
      if (input === 'e') {
        endGame = true;
        break;
      }
      if (input === 'p') {
        console.clear();
        prompt(`Stats:${'\n'}X wins: ${wins.X + '\n'}O wins: ${wins.O + '\n'}Press enter to remain....`);
        promptMessage = genericPrompt();
        continue;
      }
      promptMessage = `${player}: The inserted field is not valid. Try again: `;
      continue;
    }
    const [row, col] = input.split(':');
    if (grid[row-1][col-1]) {
      promptMessage = `${player}: That space is already taken. Try again: `;
      continue;
    }
    grid[row-1][col-1] = player;
    movesNumber++;
    if (movesNumber >= 5 && solutions()) {
      console.clear();
      drawGrid();
      wins[player]++;
      prompt(`${player} won. Press enter to start a new round.`);
      changePlayer();
      break;
    }
    if (movesNumber >= 9) {
      prompt(`There is a tie. Press enter to start a new round.`);
      player = 'X';
      break;
    }
    changePlayer();
    promptMessage = genericPrompt();
  }
}

function startGame() {
  while(!endGame){
    initializeGameData();
    playTicTacToe();
  }
}

module.exports = startGame;
module.exports.init = startGame;

//startGame();
