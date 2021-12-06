import React from "react";
import './EndUser.css';
import { ListOfOffers } from "./Components/ListOfOffers/ListOfOffers";
import { Latitude } from "./Components/MovementSimulator/Latitude/Latitude";
import { Longitude } from "./Components/MovementSimulator/Longitude/Longitude";
import { Map } from "./Components/MovementSimulator/Map/Map";
import { Wrapper, Status } from "@googlemaps/react-wrapper";


export class EndUser extends React.Component {
  render() {
    const render = (status) => {
      return <h1>{status}</h1>;
    };
    return (
      <div className="EndUser">
        <h1>Movement Simulator</h1>
        <Latitude />
        <Longitude />
        <Wrapper apiKey={'AIzaSyBg2eVThhibwLP2ujP9p5nwgFfVZvJlijg'} render={render}>
          <Map />
        </Wrapper>
        <ListOfOffers />
      </div>
    );
  }
}
export default EndUser;