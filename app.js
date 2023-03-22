"use strict";

// ============ LOAD & INIT APP ============ //
window.addEventListener("load", initApp);

function initApp() {
  // Harry Potter
  const harry = {
    name: "Harry Potter",
    species: "human",
    gender: "male",
    house: "Gryffindor",
    dateOfBirth: "31-07-1980",
    yearOfBirth: 1980,
    ancestry: "half-blood",
    eyeColour: "green",
    hairColour: "black",
    wand: "holly,phoenix feather,11",
    patronus: "stag",
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: "Daniel Radcliffe",
    alive: true,
    image: "http://hp-api.herokuapp.com/images/harry.jpg",
  };

  // Hermione Granger
  const hermione = {
    name: "Hermione Granger",
    species: "human",
    gender: "female",
    house: "Gryffindor",
    dateOfBirth: "19-09-1979",
    yearOfBirth: 1979,
    ancestry: "muggleborn",
    eyeColour: "brown",
    hairColour: "brown",
    wand: "vine,dragon heartstring",
    patronus: "otter",
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: "Emma Watson",
    alive: true,
    image: "http://hp-api.herokuapp.com/images/hermione.jpeg",
  };

  // Ron Weasley
  const ron = {
    name: "Ron Weasley",
    species: "human",
    gender: "male",
    house: "Gryffindor",
    dateOfBirth: "01-03-1980",
    yearOfBirth: 1980,
    ancestry: "pure-blood",
    eyeColour: "blue",
    hairColour: "red",
    wand: "willow,unicorn tail-hair,14",
    patronus: "Jack Russell terrier",
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: "Rupert Grint",
    alive: true,
    image: "http://hp-api.herokuapp.com/images/ron.jpg",
  };
  // Draco Malfoy
  const draco = {
    name: "Draco Malfoy",
    species: "human",
    gender: "male",
    house: "Slytherin",
    dateOfBirth: "05-06-1980",
    yearOfBirth: 1980,
    ancestry: "pure-blood",
    eyeColour: "grey",
    hairColour: "blonde",
    wand: "hawthorn,unicorn tail-hair,10",
    patronus: "",
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: "Tom Felton",
    alive: true,
    image: "http://hp-api.herokuapp.com/images/draco.jpg",
  };
  // Severus Snape
  const snape = {
    name: "Severus Snape",
    species: "human",
    gender: "male",
    house: "Slytherin",
    dateOfBirth: "09-01-1960",
    yearOfBirth: 1960,
    ancestry: "half-blood",
    eyeColour: "black",
    hairColour: "black",
    wand: "",
    patronus: "doe",
    hogwartsStudent: false,
    hogwartsStaff: true,
    actor: "Alan Rickman",
    alive: false,
    image: "http://hp-api.herokuapp.com/images/snape.jpg"
  }
//   showCharacter(harry, hermione, ron, draco, snape);
showCharacter(harry);
showCharacter(ron);
showCharacter(hermione);
showCharacter(snape);
showCharacter(draco);
}


function showCharacter(character) {
    console.log(character);
   const myHtml = /*html*/ `
   <article>
	<img src="${character.image}">
	<h2>${character.name}</h2>
	<p>${character.house}</p>
  <p>Date of Birth: ${character.dateOfBirth}</p>
  <p>Played by ${character.actor}</p>
  <p>Patronus is the shape of a ${character.patronus}</p>
</article>`
document.querySelector("#characters").insertAdjacentHTML("beforeend", myHtml);
document.querySelector("#characters article:last-child").addEventListener("click", characterClicked)
function characterClicked() {
    document.querySelector("#dialog-name").textContent = character.name;
    document.querySelector("#dialog-img").src = character.image;
    document.querySelector("#dialog-house").textContent = character.house;
    document.querySelector("#dialog-birthday").textContent = character.dateOfBirth;
    document.querySelector("#dialog-patronus").textContent = character.patronus; 
    document.querySelector("#dialog-actor").textContent = character.actor; 
    document.querySelector("#dialog-ancestry").textContent = character.ancestry; 
    document.querySelector("#dialog-species").textContent = character.species; 
    document.querySelector("#dialog-main").showModal();
}
}


