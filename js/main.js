/*----- constants -----*/
const color = {
    '0': 'white',
    '1': 'blue',
    '-1': 'black'
}
const chickenDinner = [
    [0,1,2],
    [0,3,6],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6]

]
const x = 'x';
const o = 'o';
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
    board.forEach(function(box, index){
        document.getElementById(box).style.backgroundColor = color[box];
    })
}
render();
function dropBox(e){

    turn *= -1;
    render();
}