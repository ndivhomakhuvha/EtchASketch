const container = document.querySelector(".drawingBoard");
const color = document.querySelector(".color");
const eraser = document.querySelector(".eraser");
const eraserContainer = document.querySelector(".eraserContainer");
let clearButton = document.querySelector('.clear')
const slider = document.querySelector(".slider");
const eraserOnorOff = document.querySelector('span');
let name;
let downloadButton = document.querySelector('.downloadButton')
let label = document.querySelector('label');
let length,
  mousedown = false,
  colorName, div;

document.addEventListener('DOMContentLoaded', () => {
  length = Number(slider.value);
  colorName = color.value;
  setGrid(length);
  draw(length)
})

function setGrid(length) {
  container.style.display = "grid";
  container.style.gridTemplateColumns = `repeat(${length},1fr)`;
  container.style.gridTemplateRows = `repeat(${length},1fr)`;
  label.textContent = `${length} * ${length}`;
}

function isMouseDown() {
  document.addEventListener("mousedown", function () {
    mousedown = true;

  });
  document.addEventListener("mouseup", function () {
    mousedown = false;
  });
}

function changeColor() {
  color.addEventListener("change", function () {
    colorName = color.value;
  });
}


function creatingDiv() {
  container.textContent = "";
  for (let i = 1; i <= length * length; i++) {
    div = document.createElement("div");
    div.classList.add("box");
    container.appendChild(div);
    div.addEventListener("mouseenter", mouseAction);
  }
}

function mouseAction() {
  if (mousedown) {
    if (colorName) {
      this.style.background = `${colorName}`;
    }
  } else {
    return;
  }
}


function Eraser() {
  switch (eraser.style.color) {
    case "red":
      colorName = `${color.value}`;
      eraser.style.color = "green";
      eraserOnorOff.textContent = ': OFF'
      eraserOnorOff.style.color = 'red'
      eraserContainer.style.backgroundColor = `rgba(73, 172, 73, 0.315)`;
      break;
    default:
      colorName = "white";
      eraser.style.color = "red";
      eraserOnorOff.textContent = ': ON'
      eraserOnorOff.style.color = 'green'
      eraserContainer.style.backgroundColor = "rgba(255, 0, 0, 0.295)";
  }
}
function downloader() {
  var doc = new jsPDF("p", "pt", "a4");
  doc.setFontSize(14);

  doc.html(container, {

    callback: function (doc) {
      doc.save(`${name}`);
    },
    margin:[100,0,0,0],
    width: 50,
    x: 0,
    y: 0,
  });
}


function draw() {
  isMouseDown();
  changeColor();
  creatingDiv();
}
function clear() {
  draw(' ');
}


slider.addEventListener("change", (e) => {
  length = e.target.value;
  setGrid(length);
  draw(length);
});

downloadButton.addEventListener('click', () => {
  name = prompt('What is your lovers name');
  if(name === null || name === ''){
    name = 'For the Streets';
  }
  downloader();
})

eraserContainer.addEventListener("click", Eraser);
clearButton.addEventListener('click', clear)