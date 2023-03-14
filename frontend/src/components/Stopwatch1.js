import React, { useState } from "react";
import Timer from "./Timer";
import Cookies from 'js-cookie';

function Stopwatch1() {

    const time = Cookies.get('time');

  return (
    <div >
      <h3 className="karan"> <b>Call duration</b> </h3>
      <Timer time={time} />
    </div>
  );
}
  
export default Stopwatch1;
