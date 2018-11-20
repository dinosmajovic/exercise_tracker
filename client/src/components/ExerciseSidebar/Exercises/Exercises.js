import React, { Component } from "react";
import classes from "./Exercises.module.sass";
import Exercise from "./Exercise/Exercise";

class Exercises extends Component {
  state = {
    exercises: [
      {
        number: 1,
        name: "Incline Hammer Curls"
      },
      {
        number: 2,
        name: "Wide-Grip Pull-Up"
      },
      {
        number: 3,
        name: "T-Bar Row with Handle"
      },
      {
        number: 4,
        name: "Barbell Curl"
      },
      {
        number: 5,
        name: "Seated Dumbbell Press"
      },
      {
        number: 6,
        name: "Barbell Rear Delt Row"
      },
      {
        number: 7,
        name: "Barbell Squat"
      }
    ]
  };

  render() {
    let exercises = this.state.exercises.map(exercise => (
      <Exercise
        number={exercise.number}
        name={exercise.name}
        key={exercise.number}
      />
    ));
    return <div className={classes.Exercises}>{exercises}</div>;
  }
}

export default Exercises;
