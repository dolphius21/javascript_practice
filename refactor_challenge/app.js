let color = '';

const randomValue = () => Math.floor(Math.random() * 256 );

const randomColor = (value) => `rgb(${value()},${value()},${value()})`;

const print = (message) =>  document.querySelector('main').innerHTML = message;

for ( let i = 0; i < 10; i++ ) {
  color += `<div style="background-color: ${randomColor(randomValue)}">${i}</div>`;
}

print(color);

