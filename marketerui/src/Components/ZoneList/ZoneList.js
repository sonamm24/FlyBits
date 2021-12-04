import React from 'react';
import './ZoneList.css';
import '../../Common/Common.css';
import { ZoneItem } from './ZoneItem/ZoneItem';

export class ZoneList extends React.Component {

  render() {
    return (
    <div className="List ZoneList">
        <h1>Zones</h1>
        <ZoneItem/>
      
        <button class="buttonAdd">Add</button>
       

    </div>
    );
  }
}