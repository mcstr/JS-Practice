const beerContainer = document.querySelector('.main-container');
const beerImage = document.getElementById('image');
const beerDescription = document.getElementById('description');
const twitterButton = document.getElementById('twitter');
const newBeer = document.getElementById('new-beer');
const beerName = document.querySelector('h1');
const tagline = document.querySelector('h3');
const loader = document.getElementById('loader');

let counter = 0;

// show loading

function loading() {
  loader.hidden = false;
  beerContainer.hidden = true;
}

// hide loading

function complete() {
  if (!loader.hidden) {
    beerContainer.hidden = false;
    loader.hidden = true;
  }
}

// get random beer from API

async function getBeer() {
  loading();
  const apiUrl = 'https://api.punkapi.com/v2/beers/random';
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    data.forEach((element) => {
      if (element.image_url === null) {
        getBeer();
      } else {
        beerName.innerText = element.name;
        tagline.innerText = element.tagline;
        beerDescription.innerText = element.description;
        beerImage.src = element.image_url;
        // stop loader and show quote
        complete();
      }
    });
  } catch (error) {
    if (counter < 10) {
      getBeer();
      counter += 1;
      console.log(counter);
    } else {
      alert("You won't get a beer today! Sorry!");
    }
  }
}

// tweet beer

function tweetBeer() {
  const beer = beerName.innerText;
  const description = beerDescription.innerText;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${beer} - ${description}`;
  window.open(twitterUrl, '_blank');
}

// on load
getBeer();

//event listeners

newBeer.addEventListener('click', getBeer);
twitterButton.addEventListener('click', tweetBeer);
