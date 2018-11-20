import React, { Component } from 'react';
import classes from './Exercise.module.sass';

class Exercise extends Component {
  render() {
    return (
      <div className={classes.Exercise}>
        <span className={classes.Number}>{this.props.number}</span>
        <span className={classes.Name}>{this.props.name}</span>
      </div>
    );
  }
}

export default Exercise;
