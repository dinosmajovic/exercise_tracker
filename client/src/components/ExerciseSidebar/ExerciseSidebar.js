import React, { Component } from "react";
import classes from "./ExerciseSidebar.module.sass";
import Exercises from "./Exercises/Exercises";
import Calendar from "./Calendar/Calendar";
import Footer from "./Footer/Footer";

class ExerciseSidebar extends Component {
  render() {
    return (
      <div className={classes.ExerciseSidebar}>
        <Exercises />
        <Calendar />
        <Footer />
      </div>
    );
  }
}

export default ExerciseSidebar;
