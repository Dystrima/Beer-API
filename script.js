const theName = document.querySelector(".name span");
const theDescription = document.querySelector(".description  span");
const food = document.querySelector(".food  span");
const first = document.querySelector(".first  span");
const img = document.querySelector(".img");

const fetchData = async () => {
  const res = await fetch(`https://api.punkapi.com/v2/beers/random`);
  const data = await res.json();
  const randomBeer = data[0];
  const beerName = randomBeer.name;
  theName.innerText = beerName;
  const beerDescription = randomBeer.description;
  theDescription.innerText = beerDescription;
  const beerFirstBrewed = randomBeer.first_brewed;
  first.innerText = beerFirstBrewed;
  const beerFoodPairing = randomBeer.food_pairing.join(", ");
  food.innerText = beerFoodPairing;
  const beerImg = randomBeer.image_url;
  img.innerHTML = `<img src="${beerImg}" alt="">`;
};

fetchData();

const newBeer = document.querySelector(".refresh");

newBeer.addEventListener("click", () => window.location.reload(true));
