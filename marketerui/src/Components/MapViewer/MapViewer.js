import React from 'react';
import './MapViewer.css';
import { Status, Marker } from "@googlemaps/react-wrapper";
import { Branches } from '../../Common/Data';


export class MapViewer extends React.Component {

  generateMarkers(bankBranch){
    const MapPosition = {
      lat: bankBranch.latitude,
      lng: bankBranch.longitude
    }
    
    return <Marker/>;
  }

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
  }

  componentDidMount() {
    this.map = new window.google.maps.Map(this.mapRef.current, this.mapOptions);


  }

  render() {
    
    const listOfMarkers = Branches.map(this.generateMarkers); 
    return (
      <div className="Map" ref={this.mapRef}>
        {listOfMarkers}
      </div>
    );
    
  }
}