import React, { useState } from "react";
import Timer from "./Timer";
// import ControlButtons from "./ControlButtons";
 

let isActive, setIsActive
let isPaused, setIsPaused
let stime, setTime

const shandleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };
  
  const shandlePauseResume = () => {
    setIsPaused(!isPaused);
  };
  


function Sstopwatch() {
  [isActive, setIsActive] = useState(false);
  [isPaused, setIsPaused] = useState(true);
  [stime, setTime] = useState(0);
  
  React.useEffect(() => {
    let interval = null;
  
    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((stime) => stime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);
  

  
  return (
    <div >
      <h3 className="karan"> <b>Correct posture duration</b>  </h3>
      <Timer time={stime} />
    </div>
  );
}
  
export default Sstopwatch;
export {shandleStart,shandlePauseResume,stime};