import React from 'react';
import './Map.css';
import { Branches } from '../../../Common/Data';


export class Map extends React.Component {

  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
    this.mapOptions = {
      center: {
        lat: 43.4567123445,
        lng: -80.124562443
      },
      zoom: 14
    }

    this.map = null;
    this.listOfMarkers = [];
  }

  componentDidMount() {
    this.map = new window.google.maps.Map(this.mapRef.current, this.mapOptions);

    if(this.map) {
      this.generateMarkers();
    }
  }

  generateMarkers() {
    Branches.forEach(
      (bankBranch) => {
        const MapPosition = new window.google.maps.LatLng(
          bankBranch.latitude,
          bankBranch.longitude
        );
        const markerOptions = {
          position: MapPosition,
          map: this.map
        };
        this.listOfMarkers.push(
          new window.google.maps.Marker(markerOptions)
        );
      }
    )
  }

  render() {
    return (
      <div className="Map" ref={this.mapRef}>
      </div>
    );

  }
}