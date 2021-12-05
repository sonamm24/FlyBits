import React from "react";
import Latitude from "./Components/MovementSimulator/Latitude/Latitude";
import Longitude from "./Components/MovementSimulator/Longitude/Longitude";
export class EndUser extends React.Component {

  render() {
    return (
    <div className="EndUser">
        <h1>Movement Simulator</h1>
        <Latitude/>
        <Longitude/>
    </div>
    );
  }
}
export default EndUser;