const Zones = [
  {
    zone_id: 0,
    zone_name: "Zone-0",
    lat: -80.213843,
    lng: 43.499197,
    radius: 5,
    promo: {
      img: "https://media.istockphoto.com/photos/mid-adult-couple-working-on-home-finance-picture-id1319766088",
      caption: "PROMOTION"
    }
  },
  {
    zone_id: 1,
    zone_name: "Zone-1",
    lat: -80.22804026340866,
    lng: 43.496978805182636,
    radius: 10,
    promo: {
      img: "https://assets.ey.com/content/dam/ey-sites/ey-com/en_nl/topics/finance-navigator/insights/ey-fn-12-sources-of-finance-for-entrepreneurs.jpg",
      caption: "PROMOTION"
    }
  },
  {
    zone_id: 2,
    zone_name: "Zone-2",
    lat: -80.2116811587816,
    lng: 43.484192487309656,
    radius: 3,
    promo: {
      img: "https://media.istockphoto.com/photos/finance-and-economy-chart-for-dollar-gold-euro-currencies-trading-picture-id1288703928",
      caption: "PROMOTION"
    }
  },
  {
    zone_id: 3,
    zone_name: "Zone-3",
    lat: -80.21583872128352,
    lng: 43.51081120760047,
    radius: 4,
    promo: {
      img: "https://assets.ey.com/content/dam/ey-sites/ey-com/en_nl/topics/finance-navigator/insights/ey-fn-12-sources-of-finance-for-entrepreneurs.jpg",
      caption: "PROMOTION"
    }
  }
];

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

function sendPromoList(webSocket, location) {
  let promoList = []
  global.zonesList.forEach(
    element => {
      let deltaLat = element.lat - parseFloat(location.lat);
      let deltaLng = element.lng - parseFloat(location.lng);
      let { deltaLatInKm, deltaLngInKm } = convertLatLngToKm(deltaLat, deltaLng);
      let distance = Math.sqrt(Math.pow(deltaLngInKm,2) + Math.pow(deltaLatInKm,2));

      console.log(distance);
      promoList.push = element.promo;
    }
  );

  const message = {
    type: 'promos',
    data: promoList
  }
  webSocket.send(JSON.stringify(message));
}

module.exports = onConnect;