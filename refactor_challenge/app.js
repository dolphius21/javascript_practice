let html = '';
let rgbColor;

function randomRGB() {
  return Math.floor(Math.random() * 256 );
}

function randomColor() {
  let color = `rgb(${randomRGB()},${randomRGB()},${randomRGB()})`;
  return color;
}

function print(message) {
  document.write(message);
}

for ( let i = 0; i < 10; i++ ) {
  rgbColor = randomColor();
  html += '<div style="background-color:' + rgbColor + '"></div>';
}

print(html);
