const boxSize = document.getElementById('boxSize');
let drawingBoard = document.querySelector('.drawingBoard');
let colorPicker = document.querySelector('.color')
let color;

function Draw() {

}
document.addEventListener('mousedown', () => {
    return true;
})



function Erase() {

}

// Create Board
function checkEvent() {

}

function isMouseDown() {

}

boxSize.addEventListener('change', (e) => {
    let value = Number(e.target.value);

    switch (value) {
        case 1:
            createBoard(600, '20px', '20px');
            break;
        case 2:
            createBoard(600, '25px', '25px');
            break;
        default:
            createBoard(600, '30px', '30px');
            break;
    }
})
let div;
function createBoard(nBlocks, height, width) {
    drawingBoard.textContent = '';
    for (let i = 0; i < nBlocks; i++) {
        div = document.createElement('div');
        div.style.height = height;
        div.style.width = width;
        div.style.border = '1px solid black';
        drawingBoard.appendChild(div);
        div.addEventListener('mousedown', changeColor);
        div.addEventListener('mouseover',changeColor)
    }
}

function changeColor(e) {

    colorPicker.addEventListener('change', (e) => {
       div.style.backgroundColor = e.target.value;
    })

}
