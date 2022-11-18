
const container = document.querySelector('.drawingBoard');
const color = document.querySelector('.color');
const slider = document.querySelector('.slider')
let eraser = document.querySelector('.eraser')
let label = document.querySelector('label')
let length;

let mousedown = false;
document.addEventListener('mousedown', function () {
    mousedown = true;
})
document.addEventListener('mouseup', function () {
    mousedown = false;
})

let colorChange;
color.addEventListener('change', function (e) {
    colorChange = this.value;
})
eraser.addEventListener('click', () => {
    colorChange = 'white';
})


slider.addEventListener('change', (e) => {
    length = Number(e.target.value)
    label.textContent = `${length} x ${length}`
    changeLength();
    setGrid(length);
})




function changeLength() {
    if (slider.value > 0) {
        draw(length);
    } else {
        draw('')
    }
}

function setGrid(size) {
    container.style.display = 'grid';
    container.style.gridTemplateColumns = `repeat(${size},1fr)`
    container.style.gridTemplateRows = `repeat(${size},1fr)`
}

function draw(length) {
    container.textContent = '';
    for (let i = 1; i <= length * length; i++) {
        let div = document.createElement('div');
        div.classList.add('box')
        container.appendChild(div)
        div.addEventListener('mouseenter', () => {
            if (mousedown) {
                if (colorChange) {
                    div.style.backgroundColor = `${colorChange}`
                }
            } else {
                return;
            }
        })
    }
}