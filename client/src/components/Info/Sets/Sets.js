import React, { Component } from "react";
import classes from "./Sets.module.sass";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Set from "./Set/Set";

class Sets extends Component {
  state = {
    sets: [{}, {}, {}, {}]
  };
  render() {
    let sets = this.state.sets.map((set, index) => (
      <Set number={index + 1} key={index} />
    ));
    return (
      <div className={classes.Sets}>
        <Header />
        {sets}
        <Footer />
      </div>
    );
  }
}

export default Sets;
