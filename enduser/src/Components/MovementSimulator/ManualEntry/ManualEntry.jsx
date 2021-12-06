import React from "react";
import './ManualEntry.css';


export class ManualEntry extends React.Component {

  constructor(props){
    super(props);

    this.emitLocation = props.onSubmit;

    //we need references to keep track of the input html elements
    this.longitudeInput = React.createRef();
    this.latitudeInput = React.createRef();
  }

  submitLocation() {
    const position = {
      lat: parseInt(this.latitudeInput.current.value),
      lng: parseInt(this.longitudeInput.current.value)
    }

    this.emitLocation(position);
  }

  render() {
    return (
      <div className="ManualEntry">
        <h1>Movement Simulator</h1>
        <div className="form">
          <div className="form-group Longitude">
            <label htmlFor="longitude">Longitude:</label>
            <input id="longitude" type="text" ref={this.longitudeInput}/>
          </div>
          <div className="form-group Latitude">
            <label htmlFor="latitude">Latitude:</label>
            <input id="latitude" type="text" ref={this.latitudeInput}/>
          </div>
          <button onClick={() => this.submitLocation()}>Go To Location</button>
        </div>
      </div>
    );
  }
}
