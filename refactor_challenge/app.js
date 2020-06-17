let html = '';
let rgbColor;

const randomRGB = () => {
  return Math.floor(Math.random() * 256 );
};

const randomColor = () => {
  let color = `rgb(${randomRGB()},${randomRGB()},${randomRGB()})`;
  return color;
};

const print = (message) => {
  let main = document.querySelector('main');
  main.innerHTML = message;
};

for ( let i = 0; i < 10; i++ ) {
  rgbColor = randomColor();
  html += `<div style="background-color: ${rgbColor}">${i}</div>`;
}

print(html);

