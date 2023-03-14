import React from "react";  
import Stopwatch from "./Stopwatch";
import Sstopwatch from './Sstopwatchs';
function Time () 
{ 
    return (  
        <div className="row" style={{width:'600px'}}>
            <div className="col-md-4">
                <Stopwatch/>
            </div>
            <div className="col-md-6 offset-md-1">
                <Sstopwatch/>
            </div>
        </div>
        );  
    } 
export default Time;