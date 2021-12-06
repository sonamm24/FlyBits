import React from 'react';
import './ListOfOffers.css';
import '../../Common/Common.css';
import { OfferItem } from './OfferItem/OfferItem';
import { Offers } from '../../Common/Data';

export class ListOfOffers extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      offers: props.Offers
    }
  }

  generateOfferItem(item) {
    const Img = item.img;
    const Caption = item.caption;
    const uniqueKey = "offer_" + Date.now();
    return <OfferItem key={uniqueKey} OfferText={Caption} OfferImg={Img} />;
  }

  render() {

    const listOfOffers = this.state.offers.map(this.generateOfferItem);

    return (
      <div className="ListOfOffers">
        <h1>List Of Offers</h1>
        {listOfOffers}
      </div>
    );
  }
}
