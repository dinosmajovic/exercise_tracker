import React, { Component } from 'react';
import classes from './Days.module.sass';

class Days extends Component {
  render() {
    return (
      <div className={classes.Days}>
        <div>Monday</div>
        <div>Tuesday</div>
        <div>Wednesday</div>
        <div>Thursday</div>
        <div>Friday</div>
        <div>Saturday</div>
        <div>Sunday</div>
      </div>
    );
  }
}

export default Days;
