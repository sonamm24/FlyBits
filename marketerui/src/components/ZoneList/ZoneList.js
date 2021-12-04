import React from 'react';
import './ZoneList.css';
import { ZoneItem } from './ZoneItem/ZoneItem';

export class ZoneList extends React.Component {

  render() {
    return (
    <div className="parallax">
        <h1>ZoneList</h1>
        <ZoneItem/>
    </div>
    );
  }
}