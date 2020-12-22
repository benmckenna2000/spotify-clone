import React from "react";
import "../css/Player.css";
import Body from "./Body";
import Sidebar from "./Sidebar";

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <Body />
      </div>
    </div>
  );
}

export default Player;
