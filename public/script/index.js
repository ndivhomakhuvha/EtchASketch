const container = document.querySelector('.drawingBoard');
const color = document.querySelector('.color');
const radio = document.querySelector('.radio')
let p = document.querySelector('p')



function getLength() {
    radio.addEventListener('change', changeLength);
    setGrid(80);
}

function changeLength() {
    if (this.checked) {
        let length = 80;
        draw(length);
    } else {
        draw('')
    }
}

function draw(length) {
    container.textContent = '';
    for (let i = 1; i <= length * length; i++) {
        let div = document.createElement('div');
        div.classList.add('box')
        container.appendChild(div)

    }
}

function setGrid(size) {
    container.style.display = 'grid';
    container.style.gridTemplateColumns = `repeat(${size},1fr)`
    container.style.gridTemplateRows = `repeat(${size},1fr)`
}
getLength();