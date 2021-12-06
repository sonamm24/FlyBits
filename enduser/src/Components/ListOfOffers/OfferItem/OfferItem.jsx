import React from 'react';

import './OfferItem.css';

export class OfferItem extends React.Component {

  constructor(props){
    super(props);
    this.state ={
      OfferText : props.OfferText,
      img: props.OfferImg
    }
  }

  render() {
    return (
    <div className="OfferItem">
        <img src={this.state.img}></img>
        <h3>{this.state.OfferText}</h3>
    </div>
    );
  }
}
