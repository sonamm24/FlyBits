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
      };

    this.ws.onclose = () => {
        console.log('disconnected')
      };
  }

  render() {
    const render = (status) => {
      return <h1>{status}</h1>;
    };
    return (
      <div className="EndUser">
        <MovementSimulator webSocket={this.ws}/>
        <ListOfOffers webSocket={this.ws}/>
      </div>
    );
  }
}
export default EndUser;