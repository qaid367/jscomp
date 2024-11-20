function changeColor(id) {
  var element = document.getElementById(id);
  var randomColor = getRandomColor();
  element.style.backgroundColor = randomColor;
}

function getRandomColor() {
  var letters = "0123456789ABCEDF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  return color;
}

const flashBoxes = document.querySelectorAll(".flash");

flashBoxes.forEach((box) => {
  const id = box.id;
  setInterval(() => {
    changeColor(id);
  }, 500);
});
