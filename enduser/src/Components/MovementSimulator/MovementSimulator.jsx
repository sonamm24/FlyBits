import React from "react";
import './MovementSimulator.css';

import { ManualEntry } from "./ManualEntry/ManualEntry";
import { Map } from "./Map/Map";
import { Wrapper, Status } from "@googlemaps/react-wrapper";


export class MovementSimulator extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      location: {
        lat: 43.4567123445,
        lng: -80.124562443
      }
    }

  }

  updateLocation(position) {
    this.setState(
      {
        location: position
      }
    );
  }

  render() {
    const render = (status) => {
      return <h1>{status}</h1>;
    };
    return (
      <div className="MovementSimulator">
        <h1>Movement Simulator</h1>
        <div className="MovementBody">
          <ManualEntry onSubmit={(data) => this.updateLocation(data)}/>
          <div className="Right">
            <Wrapper apiKey={'AIzaSyBg2eVThhibwLP2ujP9p5nwgFfVZvJlijg'} render={render}>
              <Map userLocation={this.state.location}/>
            </Wrapper>
          </div>
        </div>
      </div>
    );
  }
}
export default MovementSimulator;