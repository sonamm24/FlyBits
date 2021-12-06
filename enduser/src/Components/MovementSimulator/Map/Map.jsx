import React from 'react';
import './Map.css';
import { Branches } from '../../../Common/Data';


export class Map extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      markerLocation: this.props.userLocation
    }

    this.mapRef = React.createRef();
    this.mapOptions = {
      center: this.props.userLocation,
      zoom: 14
    }

    this.map = null;
    this.marker = null;
  }

  componentDidMount() {
    this.map = new window.google.maps.Map(this.mapRef.current, this.mapOptions);

    if (this.map) {
      this.marker = this.generateMarker();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    //check if there was a change in the user location
    if (prevState.markerLocation.lat !== this.props.userLocation.lat ||
      prevState.markerLocation.lng !== this.props.userLocation.lng) {

      //update state
      this.setState(
        {
          markerLocation: this.props.userLocation
        }
      )

      //draw marker onto map
      if (this.map) {
        this.marker.setMap(null);
        this.marker = null;
        this.marker = this.generateMarker();
        this.map.setCenter(this.state.markerLocation);
      }
    }
  }

  generateMarker() {
    const markerOptions = {
      position: this.state.markerLocation,
      map: this.map
    };
    return new window.google.maps.Marker(markerOptions)
  }

  render() {
    return (
      <div className="Map" ref={this.mapRef}>
      </div>
    );

  }
}