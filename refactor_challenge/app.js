let color = '';

const randomValue = () => Math.floor(Math.random() * 256 );

const randomColor = () => `rgb(${randomValue()},${randomValue()},${randomValue()})`;

const print = (message) =>  document.querySelector('main').innerHTML = message;

for ( let i = 0; i < 10; i++ ) {
  color += `<div style="background-color: ${randomColor()}">${i}</div>`;
}

print(color);

