import React, { Component } from "react";
import classes from "./Description.module.sass";

class Description extends Component {
  render() {
    return (
      <div className={classes.Description}>
        <div className={classes.Content}>
            <ol>
              <li>
                Grab the pull-up bar with the palms facing forward using the
                prescribed grip. Note on grips: For a wide grip, your hands need
                to be spaced out at a distance wider than your shoulder width.
                For a medium grip, your hands need to be spaced out at a
                distance equal to your shoulder width and for a close grip at a
                distance smaller than your shoulder width.
              </li>
              <li>
                As you have both arms extended in front of you holding the bar
                at the chosen grip width, bring your torso back around 30
                degrees or so while creating a curvature on your lower back and
                sticking your chest out. This is your starting position.
              </li>
              <li>
                Pull your torso up until the bar touches your upper chest by
                drawing the shoulders and the upper arms down and back. Exhale
                as you perform this portion of the movement. Tip: Concentrate on
                squeezing the back muscles once you reach the full contracted
                position. The upper torso should remain stationary as it moves
                through space and only the arms should move. The forearms should
                do no other work other than hold the bar.
              </li>
              <li>
                After a second on the contracted position, start to inhale and
                slowly lower your torso back to the starting position when your
                arms are fully extended and the lats are fully stretched.
              </li>
              <li>
                Repeat this motion for the prescribed amount of repetitions.
              </li>
            </ol>
            <h4>Variations</h4>
            <ol>
              <li>
                If you are new at this exercise and do not have the strength to
                perform it, use a chin assist machine if available. These
                machines use weight to help you push your bodyweight.
              </li>
              <li>Otherwise, a spotter holding your legs can help.</li>
              <li>
                On the other hand, more advanced lifters can add weight to the
                exercise by using a weight belt that allows the addition of
                weighted plates.
              </li>
              <li>
                The behind the neck variation is not recommended as it can be
                hard on the rotator cuff due to the hyperextension created by
                bringing the bar behind the neck.
              </li>
            </ol>
        </div>
        <div className={classes.Photo}>
          <img
            alt="lats"
            src="https://res.cloudinary.com/dapflmgcn/image/upload/v1537220620/latissimus_dorsi.png"
          />
        </div>
      </div>
    );
  }
}

export default Description;
