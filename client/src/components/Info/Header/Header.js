import React, { Component } from "react";
import classes from "./Header.module.sass";
import Ionicon from "react-ionicons";

class Header extends Component {
  render() {
    return (
      <div className={classes.Header}>
        <span className={classes.Name}>Wide-Grip Pull-Up</span>
        <div className={classes.Controls}>
          <Ionicon icon="ios-trash" fontSize="18px" color="#5B5B5B" />
          <Ionicon icon="md-create" fontSize="18px" color="#5B5B5B" />
        </div>
      </div>
    );
  }
}

export default Header;
