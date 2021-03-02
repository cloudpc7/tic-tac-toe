/*----- constants -----*/
const color = {
    'null': 'white',
    '1': 'blue',
    '-1': 'black'
}
const winCombo = [
    [0,1,2],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6]
]
/*----- app's state (variables) -----*/
let board, winner, turn;
/*----- cached element references -----*/
const boardSpace = document.getElementById('boardSpace')
msgEl = document.getElementById('msg');
/*----- event listeners -----*/
boardSpace.addEventListener('click',dropBox);
document.querySelector('button').addEventListener('click', init);
/*----- functions -----*/
init();

function dropBox(e){
    const index = parseInt(e.target.id);
    if (board[index] || winner) return;
    board[index] = turn;
    turn *= -1;
    winner = getWinner();
    render();
}

function getWinner(){
    for(let i = 0; i < winCombo.length;i++){
       if (Math.abs(board[winCombo[i][0]] + board[winCombo[i][1]] + board[winCombo[i][2]]) === 3) return board[winCombo[i][0]];
       if (board.includes(null)) return null;
       return 'T';
    };
}
function render() {
    board.forEach(function(box, index){
        document.getElementById(index).style.backgroundColor = color[box];
    if (winner === 'T'){
        msgEl.textContent = "It's a Tie!";
    } else if (winner){
        msgEl.innerHTML = `<span style="color": ${color[winner]}">${color[winner].toUpperCase()}</span> Wins!`;
    } else {
        msgEl.innerHTML = `<span style="color: ${color[turn]}">${color[turn].toUpperCase()}</span>'s Turn`;
    }
    })
}

function init() {
    board = [null,null,null,null,null,null,null,null,null];
    turn = 1;
    winner = null;
    render();
}

