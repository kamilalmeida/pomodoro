import React from "react";
import Button from "../Button";
import styles from "./styles.module.css";

const ControlPanel = ({ events, timerState }) => {
  return (
    <div className={styles.btn}>
      {!timerState ? (
        <Button onClick={events.start}>Start</Button>
      ) : (
        <Button onClick={events.stop}>Stop</Button>
      )}
      <Button onClick={events.reset}>Reset</Button>
    </div>
  );
};

export default ControlPanel;
