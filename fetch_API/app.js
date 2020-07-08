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
    <p>Click to view images of 
    <span class="capitalize">${select.value}<span>s
    </p>
  `
  card.innerHTML = html;
}; 

const fetchBreedImage = () => {
  const breed = select.value;
  const img = card.querySelector('img');
  const p = card.querySelector('p');

  fetchData(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(data => {
      img.src = data.message;
      p.innerHTML = `Click to view more images of 
                    <span class="capitalize">${breed}<span>s`
    })
};


//  EVENT LISTENERS
select.addEventListener('change', fetchBreedImage);
card.addEventListener('click', fetchBreedImage);


//  POST DATA

