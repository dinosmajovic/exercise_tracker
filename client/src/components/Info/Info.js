import React, { Component } from "react";
import classes from "./Info.module.sass";
import Header from "./Header/Header";
import Description from "./Description/Description";
import Sets from "./Sets/Sets";
import ChartArea from "./Chart/Chart";

class Info extends Component {
  render() {
    return (
      <div className={classes.Info}>
        <Header />
        <Description />
        <Sets />
        <ChartArea />
      </div>
    );
  }
}

export default Info;
