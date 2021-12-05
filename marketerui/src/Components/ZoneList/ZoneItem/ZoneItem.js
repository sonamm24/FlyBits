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
          <button className="button">
            Edit
          </button>
          <button className="button" onClick={() => this.deleteZone()}>
            Delete
          </button>
        </div>
      </div>
    );
  }
}