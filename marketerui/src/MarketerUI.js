import React from 'react';
import { ZoneList } from './Components/ZoneList/ZoneList';
import { BranchList } from './Components/BranchList/BranchList';
import { Map } from './Components/Map/Map';
import './MarketerUI.css';

export class MarketerUI extends React.Component {
  render() {
    return (
    <div className="MarketerUI">
        <BranchList/>
        <Map/>
        <ZoneList/>
    </div>
    );
  }
}
