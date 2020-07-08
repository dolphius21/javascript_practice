const select = document.getElementById('breeds');
const card = document.querySelector('.card'); 
const form = document.querySelector('form');

//  FETCH FUNCTIONS
const fetchData = url => {
  return fetch(url)
          .then(response => response.json())
};

fetchData('https://dog.ceo/api/breeds/list')
  .then(data => generateOptions(data.message))

fetchData('https://dog.ceo/api/breeds/image/random')
  .then(data => generateImage(data.message))

//  HELPER FUNCTIONS
const generateOptions = data => {
  let options = '';
  data.map(item => {
    options += `<option value="${item}">${item}</option>`
  });
  select.innerHTML = options;
};

const generateImage = data => {
  const html = `
    <img src='${data}' alt>
    <p>Click to view images of ${select.value}</p>
  `
  card.innerHTML = html;
}; 



//  EVENT LISTENERS



//  POST DATA

