import React from 'react';
import './ZoneItem.css';

export class ZoneItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      zoneid: props.zoneid
    };

    this.deleteZone = props.onDelete;
  }
  render() {
    return (
      <div className="ZoneItem">
        <div className="ZoneItemInfo">
          {this.state.zoneid}
        </div>
        <div className="ZoneItemControls">
          <button className="button-1">
            Edit
          </button>
          <button className="button-1" onClick={() => this.deleteZone()}>
            Delete
          </button>
        </div>
      </div>
    );
  }
}