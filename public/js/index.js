"use strict";
// import "core-js/stable";
// import "regenerator-runtime/runtime";
import { DEFAULT_MAP_ZOOM_LEVEL } from "./config.js";
import distance from "./helpers.js";
import axios from "axios";

const inputSearch = document.querySelector(".address-input--");
const address = document.querySelector(".address-div");
const helpBtn = document.querySelector(".help-btn");

const getHelpFunc = async function (help) {
  try {
    const res = await axios({
      method: "GET",
      url: "/helpMe",
    });
    if (res.data.status === "success") {
      alert(`${help} is on the way`);
    }
  } catch (err) {
    alert(err.response.data.message);
  }
};

class MapApp {
  #lat;
  #lng;
  #mapCoords = [];
  #map;
  #theHospitals = {
    mustafa_Hospital: [35.3375644152962, 33.32549467087968],
    ozel_Hospital: [35.199931664594054, 33.32767263083378],
    neu_Hospital: [35.228246396588766, 33.31967681080006],
    kolan_Hospital: [35.20915404705675, 33.31677212894438],
    komiloglu_Hospital: [35.33654259651031, 33.31034555302767],
    lefkeCengiz_Hospital: [35.157420221003235, 32.868094709917415],
    gazimagusaDevlet_Hospital: [35.15487202919007, 33.90366343029331],
  };

  #policeStations = {
    kyrenia_PD: [35.34600473831902, 33.31557894013235],
    nicosia_PD: [35.18811628345015, 33.36258636602645],
    morphou_PD: [35.2009606194846, 32.98901299751162],
    trCypriot_PD: [35.19263270101967, 33.360189826346726],
    omorfita_PD: [35.17958607110221, 33.38979512184739],
    ercan_PD: [35.15847818188118, 33.50475045518113],
    alaykoy_PD: [35.183854893170285, 33.25614426879475],
    lidras_PD: [35.174876596027495, 33.361479697629804],
  };

  constructor() {
    this.#getPosition();
    helpBtn.addEventListener("click", this.#myBtn.bind(this));
  }

  /**
   * gets current position of the user's navigator.geolocation
   */
  #getPosition() {
    navigator.geolocation.getCurrentPosition(
      this.#loadMap.bind(this),
      this.#rejectedMap
    );
  }

  /**
   * @param {position} pos - get current position of navigator.geolocation.getCurrentPosition and returns an object
   */

  #loadMap(pos) {
    const position = pos.coords;
    const { latitude, longitude } = position;
    this.#mapCoords.push(latitude, longitude);

    // set map
    this.#map = L.map("map").setView(this.#mapCoords, DEFAULT_MAP_ZOOM_LEVEL);

    // set tileLayer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);
    L.Control.geocoder().addTo(this.#map);

    // adding marker to the current position
    L.marker(this.#mapCoords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 50,
          autoClose: false,
          closeOnClick: false,
        })
      )
      .setPopupContent("Welcome to school")
      .openPopup();

    L.circle(this.#mapCoords, {
      color: "red",
      fillColor: "#f03",
      fillOpacity: 0.5,
      radius: 30,
    }).addTo(this.#map);
  }

  #rejectedMap() {
    alert("Please allow access to your Current location");
  }

  /**
   *
   * @param {array} helpwith - takes returned value of findNearestLocation method to make a popUp in the returned location and popUp the name of the location [coordinates, name of location] findNearestLocation[0] returns the [lat,lng], findNearestLocation[1] returns a string
   */
  #nearestLocationPopup(helpwith) {
    const options = {};
    L.marker(this.#findNearestLocation(helpwith)[0])
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 50,
          autoClose: false,
          closeOnClick: false,
        })
      )
      .setPopupContent(this.#findNearestLocation(helpwith)[1])
      .openPopup();
  }

  #myBtn(e) {
    e.preventDefault();
    const theInputCheck = inputSearch.value;
    const theInputCheckComp = theInputCheck.toLowerCase().trim();
    if (theInputCheckComp === "hospital") {
      this.#nearestLocationPopup(this.#theHospitals);
      getHelpFunc("Ambulance");
    } else if (theInputCheckComp === "police") {
      this.#nearestLocationPopup(this.#policeStations);
      getHelpFunc("Police");
    } else {
      alert("Please enter the correct emergency you need help with");
    }

    // const geocoderInputSearchParent = document.querySelector(
    //   ".leaflet-control-geocoder-form"
    // );
  }

  /**
   *
   * @param {object} helpwith - takes coordinates({loc: [lat, lng]}) of different locations into "an array inside an Object" as variable
   * @returns [coordinate of the nearest location, name of the location]
   */
  #findNearestLocation(helpwith) {
    // create an empty list to put the calculated distance of each result of your coordinates and other hospital coordinates
    const arr = [];

    // convert the hospital object to an entries array
    const convertEntry = Object.entries(helpwith);

    // loop through the hospitals entries coordinates array and call the distance function
    convertEntry.forEach((theEntry) => {
      arr.push(distance(this.#mapCoords, theEntry[1]));
    });

    // find the smallest distance to your current coordinates
    const themin = Math.min(...arr);

    // find the index of the smallest distance in the created array
    // NOTE: since the forEach method is checking for every arrays in the hospital list...
    // ...the result of the distance would be perfectly positioned in the same index as the hospital list...
    // ... which is why we can use the findIndex method to get position of the smallest distance index
    const theminDisIndex = arr.findIndex((dis) => dis === themin);

    // return the coordinate of the smallest distance that was calculated

    // manipulate the key of the closest location and convert it to a string
    const popUpname = convertEntry[theminDisIndex][0];
    const splitPopup = popUpname
      .split("_")
      .map((el) => el.replace(el[0], el[0].toUpperCase()))
      .join(" ");

    //return the key and value of the smallest distance calculated
    return [convertEntry[theminDisIndex][1], splitPopup];
  }
}
const app = new MapApp();
