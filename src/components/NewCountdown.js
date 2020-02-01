import React, { useRef } from "react";
import Countdown from "react-countdown";

import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons'


export default function NewCountdown() {

  const countdownRef = useRef();

  const handleStart = () => {
    countdownRef.current.start();
  };
  const handlePause = () => {
    countdownRef.current.pause();

  };


  return (



    <div>
      <button className="btn btn-primary mr-1" onClick={handlePause}><Icon icon={faPause} size="2x"/></button>
      <button className="btn btn-primary"  onClick={handleStart}><Icon icon={faPlay} size="2x"/></button>
      <Countdown
        date={Date.now() + 500}
        ref={countdownRef}
        intervalDelay={0}
        precision={3}
        autoStart={false}
        renderer={props => <h1 className="m-5">{props.total}</h1>}
      />
    </div>
  );
}