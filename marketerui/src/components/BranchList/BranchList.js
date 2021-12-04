import React from 'react';
import './BranchList.css';
import { BranchItem } from './BranchItem/BranchItem';

export class BranchList extends React.Component {

  render() {
    return (
    <div className="parallax">
        <h1>BranchList</h1>
        <BranchItem/>
    </div>
    );
  }
}
