import React, { useState } from "react";
import Timer from "./Timer";
import Cookies from 'js-cookie';


function Sstopwatch1() {
  const stime = Cookies.get('stime');
  
  return (
    <div >
      <h3 className="karan"> <b>Correct posture duration</b> </h3>
      <Timer time={stime} />
    </div>
  );
}
  
export default Sstopwatch1;
