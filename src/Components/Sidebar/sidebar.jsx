import React from "react";
import "./sidebar.css";
import {
  AssignmentInd,
  Money,
  MeetingRoom,
  Home,
  AccountCircleRounded,
} from "@material-ui/icons";

export default function sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="listItem active">
              <Home />
              Home
              <div className="path"></div>
            </li>
            <li className="listItem">
              <AccountCircleRounded className="MIcon" />
              Students
            </li>
            <li className="listItem">
              <AssignmentInd className="MIcon" />
              Employees
            </li>
            <li className="listItem">
              <MeetingRoom className="MIcon" />
              Rooms
            </li>
            <li className="listItem">
              <Money className="MIcon" />
              Payments
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}