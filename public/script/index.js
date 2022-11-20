const container = document.querySelector('.drawingBoard');
const color = document.querySelector('.color');
const slider = document.querySelector('.slider')
let length, mousedown = false, colorName;


function setGrid(length) {
    container.style.display = 'grid';
    container.style.gridTemplateColumns = `repeat(${length},1fr)`
    container.style.gridTemplateRows = `repeat(${length},1fr)`
}

function isMouseDown() {
    document.addEventListener('mousedown', function () {
        mousedown = true;
    })
    document.addEventListener('mouseup', function () {
        mousedown = false;
    })
}


function changeColor() {
    color.addEventListener('change', function (e) {
        colorName = this.value;
    })

}
function mouseAction() {
    if (mousedown) {
        if (colorName) {
            this.style.background = `${colorName}`
        }
    } else {
        return;
    }
}
function creatingDiv() {
    container.textContent = '';
    for (let i = 1; i <= length * length; i++) {
        let div = document.createElement('div');
        div.classList.add('box')
        container.appendChild(div)
        div.addEventListener('mouseenter', mouseAction)
    }
}

function draw() {
    isMouseDown();
    changeColor();
    creatingDiv();

}

slider.addEventListener('change', (e) => {
    length = e.target.value;
    setGrid(length);
    draw(length)
})
