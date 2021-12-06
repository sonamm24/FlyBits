import React from "react";
import './EndUser.css';
import { ListOfOffers } from "./Components/ListOfOffers/ListOfOffers";
import { MovementSimulator } from "./Components/MovementSimulator/MovementSimulator";


export class EndUser extends React.Component {
  render() {
    const render = (status) => {
      return <h1>{status}</h1>;
    };
    return (
      <div className="EndUser">
        <MovementSimulator />
        <ListOfOffers />
      </div>
    );
  }
}
export default EndUser;