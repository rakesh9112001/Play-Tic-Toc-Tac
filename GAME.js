const gameData = [
    [0,0,0],
    [0,0,0],
    [0,0,0],
];


let editedPlayer = 0;
let activeplayer = 0;
let currentRound = 1;

const players = [
    {
        name: '',
        symbol: 'X'
    },
    {
        name: '',
        symbol: 'O'
    },
];


const playerConfigOverlayElement = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop');
const formElement = document.querySelector('form');
const errorsOutputElement = document.getElementById('config-errors');
const gameAreaElement = document.getElementById('active-game');
const activePlayerNameElement = document.getElementById('active-player-name');
const gameOverElement = document.getElementById('game-over');




const  editPlayer1BtnElement = document.getElementById('edit-player-1-btn');
const  editPlayer2BtnElement = document.getElementById('edit-player-2-btn');
const  cancleConfigBtnElement = document.getElementById('cancle-config-btn');
const startNewGameBtnElement = document.getElementById('start-game-btn');
const gameFieldElements = document.querySelectorAll('#game-bord li');
const gameBordElement = document.getElementById('game-bord');

editPlayer1BtnElement.addEventListener('click',openPlayerConfig);
editPlayer2BtnElement.addEventListener('click',openPlayerConfig);

cancleConfigBtnElement.addEventListener('click',closePlayerConfig);
backdropElement.addEventListener('click',closePlayerConfig);


formElement.addEventListener('submit',savePlayerConfig);

startNewGameBtnElement.addEventListener('click',startNewGame);


//for(const gameFieldElement of gameFieldElements){
    //gameAreaElement.addEventListener('click',selectGameField);
//}
gameBordElement.addEventListener('click',selectGameField);