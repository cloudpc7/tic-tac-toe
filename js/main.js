/*----- constants -----*/
const color = {
    '0': 'white',
    '1': 'purple',
    '-1': 'lime'
} 
/*----- app's state (variables) -----*/
let board, winner, turn;
/*----- cached element references -----*/
const boardSpace = document.getElementById('boardSpace')
/*----- event listeners -----*/
boardSpace.addEventListener('click',dropBox);
/*----- functions -----*/
init();
function init() {
    board = [0,0,0,0,0,0,0,0,0];
    turn = 1;
    winner = null;
    render();
}

function render() {
    board.forEach(function(box, rowIdx){
        document.getElementById(rowIdx).style.backgroundColor = color[0];
    })
}

function dropBox(e){
    
}