const astronautsDataUrl = 'http://api.open-notify.org/astros.json';
const wikiUrl = 'https://en.wikipedia.org/api/rest_v1/page/summary/';
const peopleList = document.getElementById('astronauts-list');
const btn = document.querySelector('button');

const getProfiles = (json) => {
  const profiles = json.people.map(person => {
    const craft = person.craft;
    if (person.name === "Anatoly Ivanishin") {
      person.name = "Anatoli Ivanishin";
    }
    if (person.name === "Chris Cassidy") {
      person.name = "Christopher Cassidy";
    }
    return fetch(wikiUrl + person.name)
          .then(response => response.json())
          .then(profile => {
             return {...profile, craft}
          })
          .catch(error => console.log('Error Fetching Wiki:', error))
  });
  return Promise.all(profiles);
}

const generateHTML = (data) => {
  data.map(person => {
    const section = document.createElement('section');
    peopleList.appendChild(section);
    section.innerHTML = `
        <img src=${person.thumbnail.source}>
        <span>${person.craft}</span>
        <h2>${person.title}</h2>
        <p>${person.description}</p>
        <p>${person.extract}</p>
      `;
  });
};

btn.addEventListener('click', (e) => {
  e.target.textContent = 'Loading...';
  fetch(astronautsDataUrl)
    .then(response => response.json())
    .then(getProfiles)
    .then(generateHTML)
    .catch(error => {
      peopleList.innerHTML = '<h3>Something went wrong!</h3>';
      console.log(error);
    })
    .finally(() => e.target.remove());
});


