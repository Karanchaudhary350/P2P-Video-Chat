import React, { useState,useEffect } from "react";
import Timer from "./Timer";
import Cookies from 'js-cookie';

let count=0;

function fail() {
  // count++
  window.open('https://sharmayashasvi.github.io/fail_page/','_blank');
  // window.open("https://stackoverflow.com/", "", "width=200,height=100"); 
}



function success() {
  // count++
  window.open('https://sharmayashasvi.github.io/success_page/','_blank');
  // window.open("https://stackoverflow.com/", "", "width=200,height=100"); 
}




function Ssstopwatch1() {

  const stime = Cookies.get('stime');
  const time = Cookies.get('time');
  let pps=0;
  time!=0 && time>stime && (pps=(stime/time)*100) && (pps=pps.toFixed(2));
  
  useEffect(()=>{
    if(pps<6 && pps!=0) fail();
    if(pps>=6 && pps!=0) success();
    }, [])


  return (
      
    <div >
      <h3 className="karan"> <b>Wrong posture duration</b> </h3>
      <Timer time={time-stime} />

      <h3 className="karan"> <b>Predicted Posture Score</b> </h3>
 <h3 className="karan" style={{color: "blue"}}> <b>{pps}</b> </h3>
      

    </div>
  );
}
  
export default Ssstopwatch1;
