import React, { Component } from "react";
import classes from "./Set.module.sass";

class Set extends Component {
  render() {
    return (
      <div className={classes.Set}>
        <span className={classes.Number}>{this.props.number}</span>
        <input type="number" value="10" className={classes.Reps} />
        <input type="number" value="60" className={classes.Weight} />
        <input type="checkbox" className={classes.Done} />
      </div>
    );
  }
}

export default Set;
