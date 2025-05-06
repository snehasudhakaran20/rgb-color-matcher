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
  updateTargetImageColor();
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

function updateTargetImageColor() {
  const rOffset = parseInt(document.getElementById('rOffset').value || 0);
  const gOffset = parseInt(document.getElementById('gOffset').value || 0);
  const bOffset = parseInt(document.getElementById('bOffset').value || 0);
  document.getElementById('rOffsetInput').value = rOffset;
  document.getElementById('gOffsetInput').value = gOffset;
  document.getElementById('bOffsetInput').value = bOffset;

  const r = clamp(targetColor.r + rOffset);
  const g = clamp(targetColor.g + gOffset);
  const b = clamp(targetColor.b + bOffset);
  document.getElementById('targetImage').style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

function clamp(value) {
  return Math.max(0, Math.min(255, value));
}

function toggleTargetRGB() {
  const display = document.getElementById('targetRGBDisplay');
  display.textContent = `R: ${targetColor.r}, G: ${targetColor.g}, B: ${targetColor.b}`;
}

function resetPage() {
  ['r', 'g', 'b'].forEach(c => {
    document.getElementById(c + 'Input').value = 0;
    document.getElementById(c + 'Slider').value = 0;
    document.getElementById(c + 'Offset').value = 0;
    document.getElementById(c + 'OffsetInput').value = 0;
  });
  document.getElementById('targetRGBDisplay').textContent = '';
  randomizeTargetColor();
  updateUserColor();
}
