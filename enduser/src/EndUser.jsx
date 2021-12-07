import React from "react";
import './EndUser.css';
import { ListOfOffers } from "./Components/ListOfOffers/ListOfOffers";
import { MovementSimulator } from "./Components/MovementSimulator/MovementSimulator";
import { Zones } from "./Common/Data";


const socketUrl = 'ws://localhost:3001/ws';
//const ws = new WebSocket(socketUrl);

export class EndUser extends React.Component {

  offerList = Zones.map(
    (zone)=>{
      return zone.promo;
    }
  );

  componentDidMount() {
    /* ws.onopen = () => {
      console.log('connected');
    };

    ws.onmessage = (event) => {
      console.log(event);
      if(event.type === 'promos') {
        this.offerList = event.data;
      }
    };

    ws.onclose = () => {
      console.log('disconnected')
    }; */
  }

  requestPromos(location) {
    /* const message = {
      action: "getPromos",
      location: location
    }
    if(ws.readyState === ws.OPEN) {
      ws.send(JSON.stringify(message));
    } else {
      alert('No server connection!');
    }; */
  }

  render() {
    return (
      <div className="EndUser">
        <MovementSimulator onPromoRequest={(location) => this.requestPromos(location)}/>
        <ListOfOffers Offers={this.offerList}/>
      </div>
    );
  }
}
export default EndUser;