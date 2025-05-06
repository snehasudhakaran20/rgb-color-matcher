/* script.js */
function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return { r, g, b };
}

const targetColor = getRandomColor();
const targetBox = document.getElementById('targetColor');
targetBox.style.backgroundColor = `rgb(${targetColor.r}, ${targetColor.g}, ${targetColor.b})`;

function updateUserColor() {
  const r = parseInt(document.getElementById('rInput').value);
  const g = parseInt(document.getElementById('gInput').value);
  const b = parseInt(document.getElementById('bInput').value);

  const userBox = document.getElementById('userColorBox');
  userBox.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

  const match = r === targetColor.r && g === targetColor.g && b === targetColor.b;
  const indicator = document.getElementById('matchIndicator');
  indicator.textContent = match ? 'Matched!' : 'Not Matched';
  indicator.style.color = match ? 'green' : '#444';
}
