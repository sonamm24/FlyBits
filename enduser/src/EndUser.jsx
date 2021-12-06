import React from "react";
import './EndUser.css';
import { ListOfOffers } from "./Components/ListOfOffers/ListOfOffers";
import { MovementSimulator } from "./Components/MovementSimulator/MovementSimulator";

const socketUrl = 'ws://localhost:3001/ws';

export class EndUser extends React.Component {

  ws = new WebSocket(socketUrl);

  componentDidMount() {
    this.ws.onopen = () => {
        console.log('connected');
      };

    this.ws.onmessage = (event) => {
        console.log(event);
        if(event.type === 'promos') {
          this.offerList = event.data;
        }
      };

    this.ws.onclose = () => {
        console.log('disconnected')
      };
  }

  requestPromos(location) {
    const message = {
      action: "getPromos",
      location: location
    }
    this.ws.send(JSON.stringify(message));
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