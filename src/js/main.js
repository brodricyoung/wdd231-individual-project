

function setParkIntro(data) {
  document.querySelector(".intro").innerHTML = `<h1>${data.fullName}</h1><p>${data.description}</p>`;
}

function setParkInfoLinks(data) {
  // we have multiple links to build...so we map to transform the array of objects into an array of HTML strings.
  const html = data.map(mediaCardTemplate);
  // join the array of strings into one string and insert it into the section
  document.querySelector(".info").insertAdjacentHTML("afterbegin", html.join(""));
}


//////////////////////////////////////////////////////////
import { mediaCardTemplate } from "./templates.mjs";
import { setHeaderFooter } from "./setHeaderFooter.mjs";
import { getParkData, parkInfoLinks } from "./parkService.mjs";

const parkData = getParkData();

setHeaderFooter(parkData);
setParkIntro(parkData);
setParkInfoLinks(parkInfoLinks);
