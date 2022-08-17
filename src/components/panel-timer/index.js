import React from "react";
import styles from "./styles.module.css";

const PanelTimer = ({ events, timer }) => {
  return (
    <div>
      <ul>
        <li>
          <div
            onClick={events.pomodoro}
            className={`${styles.button}  ${timer === "pomodoro" ? styles.actived : styles.button}`}
          >
            Pomodoro
          </div>
        </li>
        <li>
          <div
            onClick={events.shortBreak}
            className={`${styles.button}  ${
              timer === "shortBreak" ? styles.actived : styles.button
            }`}
          >
            Short Break
          </div>
        </li>
        <li>
          <div
            onClick={events.longBreak}
            className={`${styles.button}  ${
              timer === "longBreak" ? styles.actived : styles.button
            }`}
          >
            Long Break
          </div>
        </li>
      </ul>
    </div>
  );
};

export default PanelTimer;
