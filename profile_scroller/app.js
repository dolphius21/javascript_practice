const data = [
  {
    name: 'Jeff Winger',
    age: '36',
    gender: 'male',
    lookingFor: 'female',
    location: 'Denver, Colorado',
    image: 'https://vignette.wikia.nocookie.net/community-sitcom/images/6/66/Jeff_Season_Five.jpg/revision/latest?cb=20131205004423'
  },
  {
    name: 'Britta Perry',
    age: '30',
    gender: 'female',
    lookingFor: 'male',
    location: 'Denver, Colorado',
    image: 'https://vignette.wikia.nocookie.net/community-sitcom/images/f/f0/Britta_Season_Five.jpg/revision/latest?cb=20150606141234'
  },
  {
    name: 'Abed Nadir',
    age: 'N/A',
    gender: 'male',
    lookingFor: 'female',
    location: 'Riverside, Colorado',
    image: 'https://vignette.wikia.nocookie.net/community-sitcom/images/e/e8/Abed_Season_Five.jpg/revision/latest?cb=20170802130826'
  },
  {
    name: 'Annie Edison',
    age: '20',
    gender: 'female',
    lookingFor: 'male',
    location: 'Denver, Colorado',
    image: 'https://vignette.wikia.nocookie.net/community-sitcom/images/8/82/Annie_Season_Five.jpg/revision/latest?cb=20150606151621'
  },
  {
    name: 'Troy Barnes',
    age: '21',
    gender: 'male',
    lookingFor: 'female',
    location: 'Riverside, Colorado',
    image: 'https://vignette.wikia.nocookie.net/community-sitcom/images/c/c0/Troy_Season_One.jpg/revision/latest/scale-to-width-down/300?cb=20130704113554'
  },
  {
    name: 'Shirley Bennett',
    age: '39',
    gender: 'female',
    lookingFor: 'male',
    location: 'Denver, Colorado',
    image: 'https://vignette.wikia.nocookie.net/community-sitcom/images/e/e3/Shirley_Season_Five_crop.jpg/revision/latest?cb=20140206193919'
  },
  {
    name: 'Pierce Hawthorne',
    age: '66',
    gender: 'male',
    lookingFor: 'female',
    location: 'Cheyenne, Wyoming',
    image: 'https://vignette.wikia.nocookie.net/community-sitcom/images/b/ba/Chevy-chase-community-season_1.jpg/revision/latest/scale-to-width-down/300?cb=20130620193207'
  },
  {
    name: 'Ben Chang',
    age: '41',
    gender: 'male',
    lookingFor: 'female',
    location: 'Fullerton, California',
    image: 'https://vignette.wikia.nocookie.net/community-sitcom/images/c/c9/S1-Ben_Chang.jpg/revision/latest?cb=20090925220739'
  },
  {
    name: 'Craig Pelton',
    age: 'N/A',
    gender: 'male',
    lookingFor: 'Jeff',
    location: 'Denver, Colorado',
    image: 'https://vignette.wikia.nocookie.net/community-sitcom/images/e/eb/Craig_Pelton_Season_One.jpg/revision/latest?cb=20140227212347'
  },
];

// Profile Iterator
const profileIterator = (profiles) => {
  let nextIndex = 0;

  return {
    next: () => {
      return nextIndex < profiles.length ?
      { value: profiles[nextIndex++], done: false } :
      { done: true }
    }
  };
};

const profiles = profileIterator(data);

// Next Profile Display
const nextProfile = () => {
  currentProfile = profiles.next().value;

  if (currentProfile !== undefined) {
    document.getElementById('imageDisplay').innerHTML = `
      <img src="${currentProfile.image}" alt="${currentProfile.name}" style="max-width: 300px">
    `
    document.getElementById('profileDisplay').innerHTML = `
      <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Age: ${currentProfile.age}</li>
        <li class="list-group-item">Gender: ${currentProfile.gender}</li>
        <li class="list-group-item">Looking for: ${currentProfile.lookingFor}</li>
        <li class="list-group-item">Location: ${currentProfile.location}</li>
      </ul>
    `
  } else {
    window.location.reload();
  }
};

// To display first profile
nextProfile();

// Next btn event listener

document.getElementById('next').addEventListener('click', nextProfile);