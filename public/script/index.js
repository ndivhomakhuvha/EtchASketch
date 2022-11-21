let DEFAULT_COLOR;
let DEFAULT_GRID_SIZE;
const container = document.querySelector(".drawingBoard");
const color = document.querySelector(".color");
const eraser = document.querySelector(".eraser");
const eraserContainer = document.querySelector(".eraserContainer");
const slider = document.querySelector(".slider");
const eraserOnorOff = document.querySelector('span');
let label = document.querySelector('label');
let length,
  mousedown = false,
  colorName, div;


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
  color.addEventListener("change", function (e) {
    colorName = this.value;
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

function draw() {
  isMouseDown();
  changeColor();
  creatingDiv();
}

slider.addEventListener("change", (e) => {
  length = e.target.value;
  setGrid(length);
  draw(length);
});
eraser.addEventListener("click", Eraser);