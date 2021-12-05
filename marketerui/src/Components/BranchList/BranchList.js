import React from 'react';
import './BranchList.css';
import '../../Common/Common.css';
import { BranchItem } from './BranchItem/BranchItem';
import {Branches} from '../../Common/Data';

export class BranchList extends React.Component {

  generateBranchItem(item){
    const name = item.name;
    return <BranchItem key={name} branchId={name}/>;
  }

  render() {

    const listOfBranches = Branches.map(this.generateBranchItem); 

    return (
    <div className="List BranchList">
        <h1>Branches</h1>
        {listOfBranches}
    </div>
    );
  }
}
