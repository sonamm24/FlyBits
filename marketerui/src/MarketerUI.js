import React from 'react';
import { BranchItem } from './components/BranchList/BranchItem/BranchItem';
import { ZoneList } from './components/ZoneList/ZoneList';
import { BranchList } from './components/BranchList/BranchList';
import { Map } from './components/Map/Map';
import { ZoneItem } from './components/ZoneList/ZoneItem/ZoneItem';
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
