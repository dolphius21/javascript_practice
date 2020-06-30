const btn = document.getElementById('btn');
const petInfoDiv = document.getElementById('animal-info');
let clickCounter = 1;

const renderHTML = data => { 
  let html = '';
  data.forEach(obj => {
    html += `<p>${obj.name} is a ${obj.species} that likes to eat`;
    obj.foods.likes.forEach((food, index) => {
      if (index === 0) {
        html += ` ${food}`;
      } else {
        html += ` and ${food}`;
      }
    });
    html += ` and dislikes`
    obj.foods.dislikes.forEach((food, index) => {
      if (index === 0) {
        html += ` ${food}`;
      } else {
        html += ` and ${food}`;
      }
    });
    html += `.</p>`
  });
  petInfoDiv.insertAdjacentHTML('beforeend', html);
};

btn.addEventListener('click', () => {
  const petDataRequest = new XMLHttpRequest();
  petDataRequest.open('GET', `https://learnwebcode.github.io/json-example/animals-${clickCounter}.json`);

  petDataRequest.onload = () => {
    let petData = JSON.parse(petDataRequest.responseText);
    renderHTML(petData);
  };

  petDataRequest.send();
  clickCounter++;
  if (clickCounter > 3) {
    btn.classList.add('hide-me');
  }
}); 



