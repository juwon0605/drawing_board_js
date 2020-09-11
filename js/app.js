const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

ctx.strokeStyle = "";

let painting = false;

function stopPainting() {
  painting = false;
}

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  console.log(x, y);
}

function onMouseDown(event) {
  painting = true;
}

function onMouseUp(event) {
  stopPainting();
}

function onMouseLeave(evnet) {
  stopPainting();
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", onMouseDown);
  canvas.addEventListener("mouseup", onMouseUp);
  canvas.addEventListener("mouseleave", onMouseLeave);
}
