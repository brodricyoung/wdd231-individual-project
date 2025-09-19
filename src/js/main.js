import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

// disclaimer update
const disclaimer = document.querySelector(".disclaimer > a");
disclaimer.href = parkData.url;
disclaimer.innerHTML = parkData.fullName;

//  name, designation, and states update
document.querySelector(".hero-banner__content").innerHTML = parkInfoTemplate(parkData);

// title update
document.querySelector("title").innerHTML = parkData.fullName;

// img update
const heroImg = document.querySelector(".hero-banner > img");
heroImg.src = parkData.images[0].url;
heroImg.alt = parkData.images[0].altText;




function parkInfoTemplate(info) {
  return `<a href="/" class="hero-banner__title">${info.name}</a>
  <p class="hero-banner__subtitle">
    <span>${info.designation}</span>
    <span>${info.states}</span>
  </p>`;
}