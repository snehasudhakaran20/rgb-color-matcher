/* script.js */
function getRandomColor() {
  return {
    r: Math.floor(Math.random() * 256),
    g: Math.floor(Math.random() * 256),
    b: Math.floor(Math.random() * 256)
  };
}

let targetColor = getRandomColor();
updateTargetColor();

function updateTargetColor() {
  const colorBox = document.getElementById('targetColor');
  colorBox.style.backgroundColor = `rgb(${targetColor.r}, ${targetColor.g}, ${targetColor.b})`;
  document.getElementById('targetImage').style.backgroundColor = `rgb(${targetColor.r}, ${targetColor.g}, ${targetColor.b})`;
}

function updateUserColor() {
  const r = parseInt(document.getElementById('rInput').value);
  const g = parseInt(document.getElementById('gInput').value);
  const b = parseInt(document.getElementById('bInput').value);
  document.getElementById('userColorBox').style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  checkMatch(r, g, b);
}

function syncSlider(channel) {
  const slider = document.getElementById(channel + 'Slider');
  const input = document.getElementById(channel + 'Input');
  input.value = slider.value;
  updateUserColor();
}

function syncInput(channel) {
  const slider = document.getElementById(channel + 'Slider');
  const input = document.getElementById(channel + 'Input');
  slider.value = input.value;
  updateUserColor();
}

function checkMatch(r, g, b) {
  const match = (r === targetColor.r && g === targetColor.g && b === targetColor.b);
  const indicator = document.getElementById('matchIndicator');
  indicator.textContent = match ? '✅ Matched!' : 'Not Matched';
  indicator.style.color = match ? 'green' : 'black';
}

function randomizeTargetColor() {
  targetColor = getRandomColor();
  updateTargetColor();
  updateUserColor();
}

function setTargetFromUserColor() {
  const r = parseInt(document.getElementById('rInput').value);
  const g = parseInt(document.getElementById('gInput').value);
  const b = parseInt(document.getElementById('bInput').value);
  targetColor = { r, g, b };
  updateTargetColor();
  updateUserColor();
}

function resetPage() {
  document.getElementById('rInput').value = 0;
  document.getElementById('gInput').value = 0;
  document.getElementById('bInput').value = 0;
  document.getElementById('rSlider').value = 0;
  document.getElementById('gSlider').value = 0;
  document.getElementById('bSlider').value = 0;
  randomizeTargetColor();
  updateUserColor();
}
