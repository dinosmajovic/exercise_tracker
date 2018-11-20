import React, { Component } from "react";
import classes from "./Chart.module.sass";
import { Chart } from "react-charts";

class ChartArea extends Component {
  render() {
    return (
      <div className={classes.Chart}>
        <div className={classes.ChartContainer}>
          <Chart
            className={classes.ReactChart}
            data={[
              {
                label: "Series 2",
                data: [[1, 35], [2, 35], [3, 40], [4, 45], [5, 50]]
              }
            ]}
            axes={[
              { primary: true, type: "linear", position: "bottom" },
              { type: "linear", position: "left" }
            ]}
          />
        </div>
      </div>
    );
  }
}

export default ChartArea;
