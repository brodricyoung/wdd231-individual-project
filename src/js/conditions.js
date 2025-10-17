
import "../css/style.css"; // we can do this type of import because we are using Vite
import "../css/conditions.css";

import { getParkData, getParkAlerts, getVisitorCenterData } from "./parkService.mjs";
import { alertTemplate, visitorCenterTemplate, activitiesTemplate } from "./templates.mjs";
import { setHeaderFooter } from "./setHeaderFooter.mjs";

function setAlerts(alerts) {
  const alertsContainer = document.querySelector(".alerts > ul");
  alertsContainer.innerHTML = "";
  const html = alerts.map(alertTemplate);
  alertsContainer.insertAdjacentHTML("beforeend", html.join(""));
}

function setVisitorCenters(visitorCenters) {
  const container = document.querySelector(".visitor ul");
  const html = visitorCenters.map(visitorCenterTemplate);
  container.insertAdjacentHTML("afterbegin", html.join(""));
}

function setActivities(activities) {
  const container = document.querySelector(".activities ul");
  const html = activitiesTemplate(activities);
  container.insertAdjacentHTML("afterbegin", html.join(""));
}

async function init() {
  const parkData = await getParkData();
  const alerts = await getParkAlerts(parkData.parkCode);
  const visitorCenterData = await getVisitorCenterData(parkData.parkCode);
  setHeaderFooter(parkData);
  setAlerts(alerts);
  setVisitorCenters(visitorCenterData);
  setActivities(parkData.activities);
}

init();