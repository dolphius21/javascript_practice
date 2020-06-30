const btn = document.getElementById('btn');

const buildHTML = (data) => {
  let petInfo = document.getElementById('animal-info');
  let html = '';
  data.forEach(data => {
    html += `${data.name} is a ${data.species}`;
  });
};

btn.addEventListener('click', () => {
  const petDataRequest = new XMLHttpRequest();
  petDataRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');

  petDataRequest.onload = () => {
    let petData = JSON.parse(petDataRequest.responseText);
    buildHTML(petData);
  };

  catDataRequest.send();
}); 


