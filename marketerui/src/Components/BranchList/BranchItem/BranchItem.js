import React from 'react';
import './BranchItem.css';

export class BranchItem extends React.Component {

  constructor(props){
    super(props);
    this.state ={
      branchId : props.branchId
    }
  }

  render() {
    return (
    <div className="BranchItem">
        <button class="button">{this.state.branchId}</button>
    </div>
    );
  }
}
