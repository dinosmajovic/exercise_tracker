import React, { Component } from 'react';
import classes from './Header.module.sass';

class Header extends Component {
  render() {
    return (
      <div className={classes.Header}>
        <input type="number" className={classes.Reps}></input>
        <input type="number" className={classes.Weight}></input>
        <input type="checkbox" className={classes.DoneAll}></input>
      </div>
    );
  }
}

export default Header;
