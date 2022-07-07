 <!-- <link rel="stylesheet" href="https://unpkg.com/leaflet@1.8.0/dist/leaflet.css"
   integrity="sha512-hoalWLoI8r4UszCkZ5kL8vayOGVae1oxXe/2A4AO6J9+580uKHDO3JdHb7NzwwzK5xr/Fs0W40kiNHxM9vyTtQ=="
   crossorigin=""/> -->

   <!-- <div class="leaflet-control-geocoder-form"><input class="" type="text" placeholder="Search..."></div> -->

// v {lat: 35.22738314157222, lng: 33.31975726727419} school lat lng
// v {lat: 35.337848859340184, lng: 33.32453609453594}

// v {lat: 35.3375644152962, lng: 33.32549467087968} mustafa hospital
// v {lat: 35.199931664594054, lng: 33.32767263083378} Ozel Baskent
// v {lat: 35.228246396588766, lng: 33.31967681080006} NEAR EAST HOSPITAL
// v {lat: 35.20915404705675, lng: 33.31677212894438} KOLAN
// v {lat: 35.33654259651031, lng: 33.31034555302767} KAMILOGLU HOSPITAL
// v {lat: 35.157420221003235, lng: 32.868094709917415} LEFKE CENGIZ HOSPITAL
// v {lat: 35.15487202919007, lng: 33.90366343029331} Gazimagusa Devlet

// console.log(
// distance(
// 6.523477110283834,
// 3.3835113121569496,
// 7.3777191153028285,
// 3.951062808686193,
// "K"
// )
// );

// const needle = 8;

// const closest = [1, 10, 7, 2, 4].reduce((a, b) => {
// return Math.abs(b - needle) < Math.abs(a - needle) ? b : a;
// });

// const hospitals = {
// theLats: [
// 35.3375644152962, 35.199931664594054, 35.228246396588766, 35.20915404705675,
// 35.33654259651031, 35.157420221003235, 35.15487202919007,
// ],
// theLngs: [
// 33.32549467087968, 33.32767263083378, 33.31967681080006, 33.31677212894438,
// 33.31034555302767, 32.868094709917415, 33.90366343029331,
// ],
// };

// v {lat: 35.3375644152962, lng: 33.32549467087968} mustafa hospital
// v {lat: 35.199931664594054, lng: 33.32767263083378} Ozel Baskent
// v {lat: 35.228246396588766, lng: 33.31967681080006} NEAR EAST HOSPITAL
// v {lat: 35.20915404705675, lng: 33.31677212894438} KOLAN
// v {lat: 35.33654259651031, lng: 33.31034555302767} KAMILOGLU HOSPITAL
// v {lat: 35.157420221003235, lng: 32.868094709917415} LEFKE CENGIZ HOSPITAL
// v {lat: 35.15487202919007, lng: 33.90366343029331} Gazimagusa Devlet

// const mustafaHospital = { theCoords: [35.3375644152962, 33.32549467087968] };
// const ozelHos = { theCoords: [35.199931664594054, 33.32767263083378] };
// const neuHosp = { theCoords: [35.228246396588766, 33.31967681080006] };
// // const neuHosp = { theCoords: [35.228246396588766, 33.31967681080006] };
// const kolan = { kolanHosp: [35.20915404705675, 33.31677212894438] };
// const komilogluHospital = {
// komilogluHosp: [35.33654259651031, 33.31034555302767],
// };
// const lefkeCengizHospital = {
// lefkeCengizHosp: [35.157420221003235, 32.868094709917415],
// };
// const GazimagusaDevlet = {
// gazimagusaDevletHosp: [35.15487202919007, 33.90366343029331],
// };

// const arr = [];
// const theHospitalEntries = Object.entries(theHospitals);
// theHospitalEntries.forEach((hosp) => {
// arr.push(distance([35.22723853450381, 33.31949977520876], hosp[1]));
// });

// const findTheMin = function () {
// const themin = Math.min(...arr);
// const theminDisIndex = arr.findIndex((dis) => dis === themin);
// // console.log(themin);
// // console.log(theHospitalEntries[theminDisIndex][1]);
// };
// findTheMin();

// const mustafaHospital = { theCoords: [35.3375644152962, 33.32549467087968] };
// const ozelHos = { theCoords: [35.199931664594054, 33.32767263083378] };
// const neuHosp = { theCoords: [35.228246396588766, 33.31967681080006] };

// const theHospitals = {
// mustafaHospital: [35.3375644152962, 33.32549467087968],
// ozelHos: [35.199931664594054, 33.32767263083378],
// neuHosp: [35.228246396588766, 33.31967681080006],
// kolanHosp: [35.20915404705675, 33.31677212894438],
// komilogluHosp: [35.33654259651031, 33.31034555302767],
// lefkeCengizHosp: [35.157420221003235, 32.868094709917415],
// gazimagusaDevletHosp: [35.15487202919007, 33.90366343029331],
// };

// const submitBtn = document.querySelector(".leaflet-control-geocoder-icon");
// const inputVal = inputSearch.value;
// const mapSearchInput = geocoderInputSearchParent?.firstElementChild;
// mapSearchInput.value = inputVal;
// submitBtn.click();

////////////////----------------------------------------------------////////////////////////////////////////////
// 35.34600473831902, 33.31557894013235 kyrenia police department
// 35.18811628345015, 33.36258636602645 nicosia police department
// 35.2009606194846, 32.98901299751162 Morphou Police Department
// 35.19263270101967, 33.360189826346726 Turkish Cypriot Police Headquarters
// 35.17958607110221, 33.38979512184739 Omorfita Police Station
// 35.15847818188118, 33.50475045518113 Ercan Polis Karakolu
// 35.183854893170285, 33.25614426879475 Alayköy Polis Karakolu
// 35.174876596027495, 33.361479697629804 Police Station Lidras

// const thepolice = {
// kyreniaPD: [35.34600473831902, 33.31557894013235],
// nicosiaPD: [35.18811628345015, 33.36258636602645],
// morphouPD: [35.2009606194846, 32.98901299751162],
// trCypriotPD: [35.19263270101967, 33.360189826346726],
// omorfitaPD: [35.17958607110221, 33.38979512184739],
// ercanPD: [35.15847818188118, 33.50475045518113],
// alaykoyPD: [35.183854893170285, 33.25614426879475],
// lidrasPD: [35.174876596027495, 33.361479697629804],
// };
