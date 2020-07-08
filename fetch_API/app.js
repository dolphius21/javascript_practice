const select = document.getElementById('breeds');
const card = document.querySelector('.card'); 
const form = document.querySelector('form');


//  HELPER FUNCTIONS
const checkStatus = response => {
  if (response.ok) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error(response.statusText));
  }
};

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
    <p>Click to view more images of 
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


//  FETCH FUNCTIONS
const fetchData = url => {
  return fetch(url)
          .then(checkStatus)
          .then(response => response.json())
          .catch(error => console.log('Looks like there was a problem', error))
};

fetchData('https://dog.ceo/api/breeds/list')
  .then(data => generateOptions(data.message))

fetchData('https://dog.ceo/api/breed/affenpinscher/images/random')
  .then(data => generateImage(data.message))


//  EVENT LISTENERS
select.addEventListener('change', fetchBreedImage);
card.addEventListener('click', fetchBreedImage);


//  POST DATA

