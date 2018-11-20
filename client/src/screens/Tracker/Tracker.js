import React, { Component } from "react";
import classes from "./Tracker.module.sass";
import MenuBar from "../../components/MenuBar/MenuBar";
import ExerciseSidebar from "../../components/ExerciseSidebar/ExerciseSidebar";
import Info from "../../components/Info/Info";

class Tracker extends Component {
  render() {
    return (
      <div className={classes.Tracker}>
        <MenuBar />
        <ExerciseSidebar />
        <Info />
      </div>
    );
  }
}

export default Tracker;
