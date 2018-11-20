import React, { Component } from "react";
import classes from "./MenuBar.module.sass";
import Controls from "./Controls/Controls";
import Search from "./Search/Search";
import Days from "./Days/Days";

class MenuBar extends Component {
  render() {
    return (
      <div className={classes.MenuBar}>
        <Search />
        <Days />
        <Controls />
      </div>
    );
  }
}

export default MenuBar;
