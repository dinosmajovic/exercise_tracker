import React, { Component } from "react";
import classes from "./Footer.module.sass";
import Ionicon from "react-ionicons";

class Footer extends Component {
  render() {
    return (
      <div className={classes.Footer}>
        <button className={classes.EditBtn}>Edit</button>
        <span className={classes.Exercises}>7 exercises</span>
        <Ionicon
          className={classes.AddBtn}
          icon="ios-add"
          color="#444"
          fontSize="24px"
        />
      </div>
    );
  }
}

export default Footer;
