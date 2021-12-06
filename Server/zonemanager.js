const Branches = require('../data/testData');
const Zones = require('../data/testData');

const GET_PROMOS = 'getPromos';
const ADD_ZONE = 'addZone';
const DELETE_ZONE = 'deleteZone';

//store a copy of offers
global.zonesList = [...Zones];

function onConnect(webSocket) {
  webSocket.send("Hello World!");
  console.log('Connected to a client');
  webSocket.on(
    'message',
    (data) => {
      console.log("message received");
      console.log(JSON.parse(data));
      const package = JSON.parse(data);
      const action = package.action;
      switch (action) {
        case GET_PROMOS:
          sendPromoList(webSocket, package.location);
          break;
        case ADD_ZONE:
          addZone(package.zone);
          sendZonesList(webSocket);
          break;
        case DELETE_ZONE:
          break;

      }
    }
  )
}

function addZone(zoneToAdd) {
  zonesList.push(zoneToAdd);
}

function sendZonesList(webSocket) {
  const message = {
    type: 'zones',
    data: zonesList
  }
  webSocket.send(JSON.stringify(message));
}

function degrees_to_radians(degrees) {
  var pi = Math.PI;
  return degrees * (pi / 180);
}

function convertLatLngToKm(lat, lng) {
  const LAT_RATIO = 110.574;
  const LNG_RATIO = 111.320;

  let latInKm = lat * LAT_RATIO;
  let latInRad = degrees_to_radians(lat);
  let lngInKm = lng * LNG_RATIO * Math.cos(latInRad);

  return { latInKm, lngInKm };
}

function sendPromoList(location) {
  let promoList = zonesList.map(
    (zone) => {
      let deltaLat = zone.lat - location.lat;
      let deltaLng = zone.lng - location.lng;
      let { deltaLatInKm, deltaLngInKm } = convertLatLngToKm(deltaLat, deltaLng);
      let distance = Math.sqrt(Math.pow(deltaLngInKm,2) + Math.pow(deltaLatInKm,2));

      if(distance < zone.radius) {
        return zone.promo;
      }
    }
  );

  const message = {
    type: 'promos',
    data: promoList
  }
  webSocket.send(JSON.stringify(message));
}

export default onConnect;