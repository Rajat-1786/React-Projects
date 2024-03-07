import { useRef, useState } from "react";
import ResultModel from "./ResultModel";

export default function TimeChallenge({title,targetTime}){
    const timer = useRef();
    const dialog = useRef();
    
    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
    
    const isTimerActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

    if(timeRemaining<=0){
        clearInterval(timer.current);
        dialog.current.open();
    }

    function handleReset(){
        setInterval(setTimeRemaining(targetTime * 1000));
    }

    function handleStart(){
        timer.current = setInterval(()=>{
            setTimeRemaining(previousTimeRemaining => previousTimeRemaining - 10)
        }, 10)
    }

    function handleStop(){
        
        clearInterval(timer.current);
        dialog.current.open()
        // setTimerStarted(false);
    }

    return (
        <>
            <ResultModel ref={dialog} targetTime={targetTime} remainingTime={timeRemaining} onReset={handleReset}></ResultModel>
            <section className="challenge">
                <h2>{title}</h2>
                
                <p className='challenge-time'>
                    {targetTime} second{targetTime > 1 ? 's': ''} 
                </p>
                <p>
                    <button onClick={isTimerActive ? handleStop : handleStart}>
                        {isTimerActive ? 'Stop' : 'Start'}
                    </button>
                </p>
                <p className={isTimerActive ? 'active' : undefined}>
                    {isTimerActive ? 'Timer is running..' : 'Time is enactive'} 
                </p>

            </section>
        </>
    )
}