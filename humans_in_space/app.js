const astronautsDataUrl = 'http://api.open-notify.org/astros.json';
const wikiUrl = 'https://en.wikipedia.org/api/rest_v1/page/summary/';
const peopleList = document.getElementById('astronauts-list');
const btn = document.querySelector('button');

// To make an AJAX request
const getJSON = (url, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.onload = () => {
    if (xhr.status === 200) {
      let data = JSON.parse(xhr.responseText);
      return callback(data);
    }
  };
  xhr.send();
};

const generateHTML = (data) => {
  const section = document.createElement('section');
  peopleList.appendChild(section);
  section.innerHTML = `
      <img src=${data.thumbnail.source}>
      <h2>${data.title}</h2>
      <p>${data.description}</p>
      <p>${data.extract}</p>
    `;
};

btn.addEventListener('click', (e) => {
  getJSON(astronautsDataUrl, (json) => {
    json.people.map(person => {
      if (person.name === "Anatoly Ivanishin") {
        person.name = "Anatoli Ivanishin";
      }
      if (person.name === "Chris Cassidy") {
        person.name = "Christopher Cassidy";
      }
      getJSON(wikiUrl + person.name, generateHTML);
    });
  });
  e.target.remove();
});
