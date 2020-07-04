const astrosUrl = 'http://api.open-notify.org/astros.json';
const wikiUrl = 'https://en.wikipedia.org/api/rest_v1/page/summary/';
const peopleList = document.getElementById('people');
const btn = document.querySelector('button');

// Handle all fetch requests
const getJSON = async url => {
  try {
    const response = await fetch(url)
    return await response.json();
  } catch (error) {
    throw error;
  }
};

const getPeopleInSpace = async url => {
  const peopleJSON = await getJSON(url);
  const profiles = peopleJSON.people.map(async person => {
    const craft = person.craft;
    if (person.name === 'Anatoly Ivanishin') {
      person.name = 'Anatoli Ivanishin';
    }
    if (person.name === 'Chris Cassidy') {
      person.name = 'Christopher Cassidy';
    }
    const profileJSON = await getJSON(wikiUrl + person.name);
    return {...profileJSON, craft};
  });
  return Promise.all(profiles)
};

// Generate the markup for each profile
const generateHTML = data => {
  data.map( person => {
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

btn.addEventListener('click', event => {
  event.target.textContent = "Loading...";
  getPeopleInSpace(astrosUrl)
    .then(generateHTML)
    .catch(error => {
      peopleList.innerHTML = '<h3>Something went wrong!</h3>'
      console.error(error);
    })
    .finally(() => event.target.remove());
});