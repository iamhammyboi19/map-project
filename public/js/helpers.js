const distance = function (firstCoords, secondCoords) {
  if (firstCoords[0] == secondCoords[0] && firstCoords[1] == secondCoords[1]) {
    return 0;
  } else {
    const radlat1 = (Math.PI * firstCoords[0]) / 180;
    const radlat2 = (Math.PI * secondCoords[0]) / 180;
    const theta = firstCoords[1] - secondCoords[1];
    const radtheta = (Math.PI * theta) / 180;
    let dist =
      Math.sin(radlat1) * Math.sin(radlat2) +
      Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist);
    dist = (dist * 180) / Math.PI;
    dist = dist * 60 * 1.1515;

    dist = dist * 1.609344;

    return dist;
  }
};

export default distance;
