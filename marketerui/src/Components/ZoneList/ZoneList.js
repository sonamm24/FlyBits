import React from 'react';
import './ZoneList.css';
import '../../Common/Common.css';
import { ZoneItem } from './ZoneItem/ZoneItem';

export class ZoneList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zones: []
    }
  }

  deleteZone(zoneToDelete) {
    let CurrentState = [...this.state.zones];
    let zonePosition = -1;
    CurrentState.forEach(
      (singleZone,zoneIndex) => {
        if(singleZone.props.zoneid === zoneToDelete){
          zonePosition = zoneIndex;
        }
      }
    )
    if(zonePosition === -1){// if position does not exist 
      return;
    }
    
    CurrentState.splice(zonePosition, 1);

    alert("Delete zone" + zoneToDelete);
    this.setState(
      {
        zones: CurrentState
      }
    );
  }

  addZone() {
    //make copy of existing state
    let newZones = [...this.state.zones];

    //generate new zone name
    const name = "Zone_" + Date.now();

    //add new zone to list of zones
    newZones.push(
      <ZoneItem key={name} zoneid={name} onDelete={() => this.deleteZone(name)} />
    );

    //set updated list of zones as new state
    this.setState(
      {
        zones: newZones
      }
    );
  }

  render() {
    return (
      <div className="List ZoneList">
        <h1>Zones</h1>
        <div className="ZoneListBody">
          {this.state.zones}
        </div>
        <button className="buttonAdd" onClick={() => this.addZone()}>Add</button>
      </div>
    );
  }
}