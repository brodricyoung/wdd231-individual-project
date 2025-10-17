
import spritePath from '../images/sprite.symbol.svg';


export function parkInfoTemplate(info) {
  return `<a href="/" class="hero-banner__title">${info.name}</a>
  <p class="hero-banner__subtitle">
    <span>${info.designation}</span>
    <span>${info.states}</span>
  </p>`;
}

export function mediaCardTemplate(info) {
  return `<div class="media-card">
  <a href="${info.link}">
  <img src="${info.image}" alt="${info.name}" class=media-card__img">
  <h3 class="media-card__title">${info.name}</h3>
  </a>
  <p>${info.description}</p>
  </div>`;
}

export function footerTemplate(data) {
  const mailing = data.addresses.find((address) => address.type === "Mailing");
  const voice = data.contacts.phoneNumbers.find((number) => number.type === "Voice");
  return `<section class="contact">
  <h3>Contact Info</h3>
  <h4>Mailing Address:</h4>
  <div><p>${mailing.line1}</p>
  <p>${mailing.city}, ${mailing.stateCode} ${mailing.postalCode}</p></div>
  <h4>Phone:</h4>
  <p>${voice.phoneNumber}</p>
  </section>`
}

export function alertTemplate(alert) {
  let alertType = "";
  switch (alert.category) {
    case "Park Closure":
      alertType = "closure";
      break;
    default:
      alertType = alert.category.toLowerCase();
  }
  return `<li class="alert">
  <svg class="icon" focusable="false" aria-hidden="true">
    <use xlink:href="${spritePath}#alert-${alertType}"></use>
  </svg>
  <div>
    <h3 class="alert-${alertType}">${alert.title}</h3>
    <p>${alert.description}</p>
  </div></li>`;
}

export function visitorCenterTemplate(visitorCenter) {
  return `<li class="visitor-center">
  <h4>${visitorCenter.name}</h4>
  <p>${visitorCenter.description}</p>
  <p>${visitorCenter.directionsInfo}</p>
  </li>`;
}

export function activitiesTemplate(activities) {
  return activities.map((activity) => `<li>${activity.name}</li>`);
}