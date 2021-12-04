import React from 'react';
import './BranchList.css';
import '../../Common/Common.css';
import { BranchItem } from './BranchItem/BranchItem';

export class BranchList extends React.Component {

  render() {
    return (
    <div className="List BranchList">
        <h1>Branches</h1>
        <BranchItem/>
    </div>
    );
  }
}
