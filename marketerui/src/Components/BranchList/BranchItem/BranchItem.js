import React from 'react';
import './BranchItem.css';

export class BranchItem extends React.Component {

  render() {
    return (
    <div className="BranchItem">
        <button class="button">Branch 1</button><br/>
        <button class="button">Branch 2</button><br/>
        <button class="button">Branch 3</button><br/>
        <button class="button">Branch 4</button><br/>
        <button class="button">Branch 5</button><br/>
        <button class="button">Branch 6</button><br/>
    </div>
    );
  }
}
