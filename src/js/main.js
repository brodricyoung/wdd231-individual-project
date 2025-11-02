
import "../css/style.css"; // we can do this type of import because we are using Vite
import "../css/home.css";

function setParkIntro(data) {
  document.querySelector(".intro").innerHTML = `<h1>${data.fullName}</h1><p>${data.description}</p>`;
}

function setParkInfoLinks(data) {
  // we have multiple links to build...so we map to transform the array of objects into an array of HTML strings.
  const html = data.map(mediaCardTemplate);
  // join the array of strings into one string and insert it into the section
  document.querySelector(".info").insertAdjacentHTML("afterbegin", html.join(""));
}

function enableNavigation() {
  const menuButton = document.querySelector("#global-nav-toggle");
  const subMenuToggles = document.querySelectorAll(".global-nav__split-button__toggle");
  // when the main menu button is clicked:
  menuButton.addEventListener("click", (ev) => {
    let target = ev.target;
    // toggle the show class on the global-nav
    document.querySelector(".global-nav").classList.toggle("show");
    // check to see if ev.target is the button or something inside the button
    if (target.tagName != "BUTTON") {
      target = target.closest("button");
    }
    // check to see if we just opened or closed the menu
    if (document.querySelector(".global-nav").classList.contains("show")) {
      // if we opened it then set the aria-expanded attribute to true
      target.setAttribute("aria-expanded", true);
    } else {
      // if we closed it then set the aria-expanded attribute to false
      target.setAttribute("aria-expanded", false);
    }

    console.log("toggle");
  });
}


//////////////////////////////////////////////////////////
import { mediaCardTemplate } from "./templates.mjs";
import { setHeaderFooter } from "./setHeaderFooter.mjs";
import { getParkData, getInfoLinks } from "./parkService.mjs";

async function init() {
  const parkData = await getParkData();
  const links = await getInfoLinks(parkData.images)
  setParkInfoLinks(links);
  setHeaderFooter(parkData);
  setParkIntro(parkData);
}

init();
enableNavigation();