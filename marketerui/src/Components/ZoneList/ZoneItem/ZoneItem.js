import React from 'react';
import './ZoneItem.css';

export class ZoneItem extends React.Component {

  render() {
    return (
      <div className="ZoneItem">
        <div className="ZoneItemInfo">
          TEXT 
          </div>
        <div className="ZoneItemControls">
          <button class="button">
            Edit
            </button>
          <button class="button">
            Delete
            </button></div>


      </div>
    );
  }
}