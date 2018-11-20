import React, { Component } from "react";
import classes from "./Calendar.module.sass";
import "./react-calendar.sass";

import Cal from "react-calendar/dist/entry.nostyle";
import { format } from "date-fns";

class Calendar extends Component {
  state = {
    date: new Date()
  };

  onChange = date => {
    console.log(date);
    this.setState({ date });
  };

  render() {
    return (
      <div className={classes.Calendar}>
        <Cal
          onChange={this.onChange}
          value={this.state.date}
          formatShortWeekday={value => format(value, "dd")}
        />
      </div>
    );
  }
}

export default Calendar;
