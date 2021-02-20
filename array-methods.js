const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
const buildPlanets = (planetArr) => {
  let domString = `<ul>`;
  planetArr.forEach((planet) => {
    domString += `<li>${planet}</li>`;
  });
  domString += '</ul>';
  const planetEl = document.getElementById("planets").innerHTML = domString;
}


/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/
const buildPlanetsWithCapital = (planetArr) => {
  let domString = '<ul>';
  planetArr.forEach((planet) => {
    domString += '<li>' + planet[0].toUpperCase() + planet.slice(1) + '</li>';
  });
  domString += '</ul>';
  const planetEl = document.getElementById("planets-capitalized").innerHTML = domString;
}

/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/
const buildPlanetsWithE= (planetArr) => {
  let domString = '<ul>';
  planetArr.forEach((planet) => {
    if (planet.includes('e')) {
      domString += `<li>${planet}</li>`;
    }
  });
  domString += '</ul>';
  const planetEl = document.getElementById("planets-with-e").innerHTML = domString;
}

buildPlanets(planets);
buildPlanetsWithCapital(planets);
buildPlanetsWithE(planets);
