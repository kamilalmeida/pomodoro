import React, { useEffect, useRef, useState } from "react";
import PanelTimer from "../panel-timer";
import ControlPanel from "../control-panel";
import styles from "./styles.module.css";
import ReactAudioPlayer from "react-audio-player";
import song from "../../audio/sound-alarme.mp3";

const Timer = () => {
  const panelValues = {
    pomodoro: 25 * 60,
    shortBreak: 5 * 60,
    longBreak: 15 * 60,
  };

  const [totalTimeInSeconds, setTotalTimeinSeconds] = useState(panelValues.pomodoro);

  const [isActive, setIsActive] = useState(false);
  const [activeTimer, setActiveTimer] = useState("pomodoro");

  const minutes = Math.floor(totalTimeInSeconds / 60);
  const seconds = totalTimeInSeconds % 60;
  let myTime = useRef();

  useEffect(() => {
    if (isActive) {
      myTime.current = setTimeout(() => {
        setTotalTimeinSeconds(totalTimeInSeconds - 1);
      }, 1000);
    }
    if (totalTimeInSeconds === 0) {
      clearTimeout(myTime.current);
    }
  }, [isActive, totalTimeInSeconds]);

  function start() {
    setIsActive(true);
  }

  function stop() {
    clearTimeout(myTime.current);
  }

  function reset() {
    clearTimeout(myTime.current);
    setIsActive(false);
    setTotalTimeinSeconds(panelValues.pomodoro);
  }

  function changeTimer(currentTimer) {
    clearTimeout(myTime.current);
    setIsActive(false);
    setActiveTimer(currentTimer);

    setTotalTimeinSeconds(panelValues[currentTimer]);
  }

  function pomodoro() {
    changeTimer("pomodoro");
  }

  function shortBreak() {
    changeTimer("shortBreak");
  }

  function longBreak() {
    changeTimer("longBreak");
  }

  return (
    <>
      {totalTimeInSeconds === 0 ? <ReactAudioPlayer src={song} autoPlay controls /> : ""}
      <PanelTimer
        events={{ pomodoro: pomodoro, shortBreak: shortBreak, longBreak: longBreak }}
        timer={activeTimer}
      />
      <div className={styles.time}>
        {minutes.toString().padStart(2, "0")}:{seconds.toString().padStart(2, "0")}
      </div>

      <ControlPanel events={{ start: start, stop: stop, reset: reset }} timerState={isActive} />
    </>
  );
};

export default Timer;
