# Marketing Tool

## Description 
The Marketing tool consists of three sections. A Marketer UI App, End User App and a Server.

The Marketer UI App allows the marketer to add promotion zones that cover different bank branch locations on a map. Marketers also have the ability to delete and edit zones as needed. Marketers can see a list of all bank branch locations.

The End User UI App allows a bank customer to receive all relevant promotions while they are at a physical bank location.

The Server manages the zone list and the bank branch list. It supplies a list of promotions to the End user UI app based on the location given by the app. And it manages the zones list based on the information supplied by the Marketer UI app.

## Screenshots:

![Marketer has access to the map they can add zone ](https://github.com/sonamm24/FlyBits/blob/master/marketerui/docs/MarketerUI.png)

![User can access their location using map and can list of offers](https://github.com/sonamm24/FlyBits/blob/master/marketerui/docs/EndUser.png)

![Marketer can delete zone](https://github.com/sonamm24/FlyBits/blob/master/marketerui/docs/DeleteZone.png)


## Tech Stack
### Front-end:
####  Framework:
`ReactJs`
####  Languages:
`HTML, CSS, JS`
#### Dependencies:
`@googlemaps/react-wrapper`
###  Back-end: 
NodeJS, Express


## Dependencies for FrontEnd: 

## How to launch MarketerUI:

    cd marketerui
    npm i
    npm start
  
  The app will launch on `localhost:3000`

 ## How to launch EndUser:

    cd enduser
    npm i
    npm start
  
  The app will launch on `localhost:5000`

### Dependencies for BackEnd:
    cd Server
    npm i
    npm start
  
  You can check the server status on `localhost:3001`

## Missing Features
### Marketer UI
- Draw zone circles when adding a new zone
- Launch Zone dialog to request for promotion information
- Edit button does not work

### Server
- return a list of promotions based on the location supplied by End User App
- add zones to local zones list based on data supplied by MarketerUI app
- Essentially server was not returning data to apps as expected, so currently apps are not connecting to server
