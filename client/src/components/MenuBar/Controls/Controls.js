import React, { Component } from 'react';
import classes from './Controls.module.sass';
import Ionicon from 'react-ionicons';

class Controls extends Component {
  render() {
    return (
      <div className={classes.Controls}>
        <button className={classes.SettingsBtn}>
          <Ionicon icon="ios-settings" fontSize="14px" color="#4F4F4F" />
        </button>
        <div className={classes.WindowControls}>
          <button className={classes.Maximize}></button>
          <button className={classes.Minimize}></button>
          <button className={classes.Close}></button>
        </div>
      </div>
    );
  }
}

export default Controls;
