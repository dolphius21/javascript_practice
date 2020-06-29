const astroUrl = 'http://api.open-notify.org/astros.json';
const wikiUrl = 'https://en.wikipedia.org/api/rest_v1/page/summary';
const astronautsList = document.getElementById('astronauts-list');
const btn = document.querySelector('button');

// To make an AJAX request
const getJSON = (url) => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.onload = () => {
    if (xhr.status === 200) {
      let data = JSON.parse(xhr.responseText);
      console.log(data);
    }
  };
  xhr.send();
};

const generateHTML = (data) => {
  const section = document.createElement('section');
  astronautsList.appendChild(section);
  section.innerHTML = `
      <img src=${data.thumbnail.source}>
      <h2>${data.title}</h2>
      <p>${data.description}</p>
      <p>${data.extract}</p>
    `;
};