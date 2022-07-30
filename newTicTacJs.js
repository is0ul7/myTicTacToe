const CONTROLS = [
    butn1 = document.getElementById("b1"),
    butn2 = document.getElementById("b2"),
    butn3 = document.getElementById("b3"),
    butn4 = document.getElementById("b4"),
    butn5 = document.getElementById("b5"),
    butn6 = document.getElementById("b6"),
    butn7 = document.getElementById("b7"),
    butn8 = document.getElementById("b8"),
    butn9 = document.getElementById("b9"),
];
const sbmButton1 = document.getElementById("sbmButton1");
const sbmButton2 = document.getElementById("sbmButton2");
const scoreP1 = document.getElementById("scoreP1");
const scoreP2 = document.getElementById("scoreP2");
const nextRoundBtn = document.getElementById("nextRoundBtn")
const restartButton = document.getElementById("restartBtn");
let result = document.getElementById("result");
const PLAYER1 = "x";
const PLAYER2 = "o";
let checkTurn;
let currentPlayer;
let currentPlayerName;
let player1Name = "";
let player2Name = "";
let p1score = 0;
let p2score = 0;
let board;

nextRoundBtn.addEventListener("click", nextRound);
restartButton.addEventListener("click", gameStart);

gameStart();
sbmButton1.onclick = function () {
    player1Name = document.getElementById("player1Name").value;
    document.getElementById("output1").innerHTML = player1Name;
    document.getElementById("player1Name").value = "";
};
sbmButton2.onclick = function () {
    player2Name = document.getElementById("player2Name").value;
    document.getElementById("output2").innerHTML = player2Name;
    document.getElementById("player2Name").value = "";
};

function gameStart() {
    checkTurn = true;
    currentPlayerName = true;
    CONTROLS.forEach(butn => {
        butn.addEventListener("click", toggleOnClick, { once: true })
        butn.textContent = "";
        result.innerHTML = "Result: ";
        freeSpace = 9;
        document.getElementById("output1").innerHTML = "";
        document.getElementById("output2").innerHTML = "";
        player1Name = "";
        player2Name = "";
        resScore(p1score = 0, p2score = 0);
    });
};

function nextRound() {
    checkTurn = true;
    currentPlayerName = true;
    CONTROLS.forEach(butn => {
        butn.addEventListener("click", toggleOnClick, { once: true })
        butn.textContent = "";
        result.innerHTML = "Result: ";
        freeSpace = 9;
    });
};

function toggleOnClick(event) {
    butn = event.target;
    currentPlayer = checkTurn ? PLAYER1 : PLAYER2;
    currentPlayerName = checkTurn ? player1Name : player2Name;
    butn.textContent = currentPlayer;
    checkTurn = !checkTurn;
    freeSpace--;
    gameBoard();
};

function gameBoard() {
    board = CONTROLS.map((element) => {
        return element.innerHTML;
    }); 
    checkWin();
};

function checkWin() {
    if (board[0], board[1], board[1] !== "" &&
        board[0] === board[1] &&
        board[0] === board[2] &&
        board[1] === board[2]) {
        Result();
        gameEnd();
    } else if (
        board[3], board[4], board[5] !== "" &&
        board[3] === board[4] &&
        board[3] === board[5] &&
        board[4] === board[5]) {
        Result();
        gameEnd();
    } else if (
        board[6], board[7], board[8] !== "" &&
        board[6] === board[7] &&
        board[6] === board[8] &&
        board[7] === board[8]) {
        Result();
        gameEnd();
    } else if (
        board[0], board[3], board[6] !== "" &&
        board[0] === board[3] &&
        board[0] === board[6] &&
        board[3] === board[6]) {
        Result();
        gameEnd();
    } else if (
        board[1], board[4], board[7] !== "" &&
        board[1] === board[4] &&
        board[1] === board[7] &&
        board[4] === board[7]) {
        Result();
        gameEnd();
    } else if (
        board[2], board[5], board[8] !== "" &&
        board[2] === board[5] &&
        board[2] === board[8] &&
        board[5] === board[8]) {
        Result();
        gameEnd();
    } else if (
        board[2], board[5], board[6] !== "" &&
        board[2] === board[4] &&
        board[2] === board[6] &&
        board[4] === board[6]) {
        Result();
        gameEnd();
    } else if (
        board[0], board[4], board[8] !== "" &&
        board[0] === board[4] &&
        board[0] === board[8] &&
        board[4] === board[8]) {
        Result();
        gameEnd();
    } else {
        itsDraw()
    };
};

function itsDraw() {
    if (freeSpace === 0) {
        result.innerHTML = "Result: Draw!!!";
        gameEnd();
    };
};

function gameEnd() {
    CONTROLS.forEach(butn => {
        butn.removeEventListener("click", toggleOnClick);
    });
};

function Result() {
    score()
    result.innerHTML = "Result: " + currentPlayerName + " WINS!!!";
};

function score() {
    if (currentPlayer === PLAYER1) {
        p1score++;
        scoreP1.innerHTML = p1score;
    } else
        p2score++;
    scoreP2.innerHTML = p2score;
};

function resScore() {
    scoreP1.innerHTML = 0
    scoreP2.innerHTML = 0
};