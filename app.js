"use strict";

// ============ LOAD & INIT APP ============ //
window.addEventListener("load", initApp);

function initApp() {
    // Harry Potter
    const potterName = "Harry Potter";
    const potterGender = "male";
    const potterHouse = "Gryffindor";
    const potterDateOfBirth = "31-07-1980";
    const potterAncestry = "half-blood";
    const potterEyeColour = "green";
    const potterHairColour = "black";
    const potterActor = "Daniel Radcliffe";
    const potterImage = "http://hp-api.herokuapp.com/images/harry.jpg";

    console.log(
        potterName,
        potterGender,
        potterHouse,
        potterDateOfBirth,
        potterAncestry,
        potterEyeColour,
        potterHairColour,
        potterActor,
        potterImage
    );
    showCharacter(
      potterImage,
      potterName,
      potterHouse,
      potterDateOfBirth,
      potterActor
    );
}


function showCharacter(image, name, house, dateOfBirth, actor) {
    console.log(image, name, house, dateOfBirth, actor);
   const myHtml = /*html*/ `
   <article>
	<img src="${image}">
	<h2>${name}</h2>
	<p>${house}</p>
  <p>Date of Birth: ${dateOfBirth}</p>
  <p>Played by ${actor}</p>
</article>`
document.querySelector("#characters").insertAdjacentHTML("beforeend", myHtml);
}