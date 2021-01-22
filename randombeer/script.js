const beerImage = document.getElementById('image');
const beerDescription = document.getElementById('description');
const twitterButon = document.getElementById('twitter');
const newBeer = document.getElementById('new-beer');
console.log(newBeer, twitterButon);

// get random beer from API

async function getBeer() {
  const apiUrl = 'https://api.punkapi.com/v2/beers/random';
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    data.forEach((element) => {
      if (element.image_url === null) {
        getBeer();
      } else {
        beerDescription.innerText = element.description;
        beerImage.src = element.image_url;
      }
    });
  } catch (error) {
    console.log('no beer for you today my friend', error);
  }
}
// on load
getBeer();

//event listeners

newBeer.addEventListener('click', getBeer);
