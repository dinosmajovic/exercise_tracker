import React, { Component } from "react";
import classes from "./Seaarch.module.sass";
import Ionicon from "react-ionicons";

class Search extends Component {
  render() {
    return (
      <div className={classes.Search}>
        <input type="text" placeholder="Search" />
        <Ionicon
          className={classes.SearchIcon}
          icon="ios-search"
          color="#4F4F4F"
          fontSize="15px"
        />
      </div>
    );
  }
}

export default Search;
