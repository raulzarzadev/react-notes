import React, { useRef } from "react";
import Countdown, {zeroPad} from "react-countdown";

import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons'


export default function NewCountdown() {
  const countdownRef = useRef();

  const Completionist = () => <span>You are good to go!</span>;

  // Renderer callback with condition
  const renderer = ({ hours, minutes, seconds, milliseconds }) => (
    <span><h1>

      {zeroPad(minutes)}:{zeroPad(seconds)}
    </h1>
      .{zeroPad(milliseconds)}
    </span>
  );

  const handleStart = () => {
    countdownRef.current.start();
  };
  const handlePause = () => {
    countdownRef.current.pause();
  };
  

  return (
    
    <div>
      
      <button className="btn btn-primary mr-1" onClick={handlePause}><Icon icon={faPause} size="2x" /></button>
      <button className="btn btn-primary" onClick={handleStart}><Icon icon={faPlay} size="2x" /></button>
       <Countdown
      
        date={Date.now() + 1000}
        controlled={false}
        
        ref={countdownRef}
        intervalDelay={0}
        precision={3}
        autoStart={false}
        renderer={renderer}
      ><Completionist />
      </Countdown> 
    </div>
  );
}