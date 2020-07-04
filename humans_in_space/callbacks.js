const astrosUrl = 'http://api.open-notify.org/astros.json';
const wikiUrl = 'https://en.wikipedia.org/api/rest_v1/page/summary/';
const peopleList = document.getElementById('people');
const btn = document.getElementById('btn');

// Make an AJAX request
const getJSON = (url, callback) => {
  const dataRequest = new XMLHttpRequest();
  dataRequest.open('GET', url);
  dataRequest.onload = () => {
    if (dataRequest.status === 200) {
      console.log(dataRequest.responseText);
      let data = JSON.parse(dataRequest.responseText);
      console.log(data);
      return callback(data);
    }
  };
  dataRequest.send();
};

// Get profiles
const getProfiles = (json) => {
  json.people.map(person => {
    if (person.name === 'Anatoly Ivanishin') {
      person.name = 'Anatoli Ivanishin';
    }
    if (person.name === 'Chris Cassidy') {
      person.name = 'Christopher Cassidy';
    }
    getJSON(wikiUrl + person.name, generateHTML);
  });
};

// Generate the HTML for each profile
const generateHTML = data => {
  const section = document.createElement('section');
  peopleList.appendChild(section);
  section.innerHTML = `
    <img src="${data.thumbnail.source}">
    <h2>${data.title}</h2>
    <p>${data.description}</p>
    <p>${data.extract}</p>
  `;
};

btn.addEventListener('click', (e) => {
  getJSON(astrosUrl, getProfiles);
  e.target.remove();
});


