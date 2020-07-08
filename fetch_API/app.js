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

Promise.all([
  fetchData('https://dog.ceo/api/breeds/list'),
  fetchData('https://dog.ceo/api/breed/affenpinscher/images/random')
])
.then(data => {
  const breedList = data[0].message;
  const initialImage = data[1].message;
  generateOptions(breedList);
  generateImage(initialImage); 
})


//  POST DATA

const postData = e => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const comment = document.getElementById('comment').value;
  const config = {
    method: 'POST',
    headers: {'Conten-Type': 'application/json'},
    body: JSON.stringify({name, comment})
  }

  fetch('https://jsonplaceholder.typicode.com/comments', config)
    .then(checkStatus)
    .then(response => response.json())
    .then(data => console.log(data))
};


//  EVENT LISTENERS
select.addEventListener('change', fetchBreedImage);
card.addEventListener('click', fetchBreedImage);
form.addEventListener('submit', postData);
