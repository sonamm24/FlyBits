import React from 'react';
import { ZoneList } from './Components/ZoneList/ZoneList';
import { BranchList } from './Components/BranchList/BranchList';
import { MapViewer } from './Components/MapViewer/MapViewer';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import './MarketerUI.css';

const render = (status) => {
  return <h1>{status}</h1>;
};

export class MarketerUI extends React.Component {

  render() {
    return (
      <div className="MarketerUI">
        <BranchList />
        <Wrapper apiKey={'AIzaSyBg2eVThhibwLP2ujP9p5nwgFfVZvJlijg'} render={render}>
          <MapViewer />
        </Wrapper>
        <ZoneList />
      </div>
    );
  }
}
