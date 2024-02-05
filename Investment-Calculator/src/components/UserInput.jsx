import { useState } from "react";
export default function UserInput({lableName,}){
    const[userInput,setVal] = useState({
        initialInvestment: 10000,
        annualInvestment: 6000,
        expectedReturn: 5,
        duration: 6
    });

    function onChangeInitialHandler(event){
        let newUserInput = JSON.parse(JSON.stringify(userInput))
        newUserInput.initialInvestment = event.target.value;
        setVal(newUserInput);
    }

    function onChangeAnnualHandler(event){
        let newUserInput = JSON.parse(JSON.stringify(userInput))
        newUserInput.annualInvestment = event.target.value;
        setVal(newUserInput);
    }

    function onChangeExpectedHandler(event){
        let newUserInput = JSON.parse(JSON.stringify(userInput))
        newUserInput.expectedReturn = event.target.value;
        setVal(newUserInput);
    }

    function onChangeDurationHandler(event){
        let newUserInput = JSON.parse(JSON.stringify(userInput))
        newUserInput.duration = event.target.value;
        setVal(newUserInput);
    }

    return(
        <>
            <section id="user-input" >
            <div className="input-group">
            <p>
                <label>INITIAL INVESTMENT</label>
                <input type="number" value={userInput.initialInvestment} onChange={onChangeInitialHandler} required></input>
            </p>
            <p>
                <label>ANNUAL INVESTMENT</label>
                <input type="number" value={userInput.annualInvestment} onChange={onChangeAnnualHandler} required></input>
            </p>
            </div>
            <div className="input-group">
            <p>
                <label>EXPECTED RETURN</label>
                <input type="number" value={userInput.expectedReturn} onChange={onChangeExpectedHandler} required></input>
            </p>
            <p>
                <label>DURATION</label>
                <input type="number" value={userInput.duration} onChange={onChangeDurationHandler} required></input>
            </p>
            </div>
            </section>
            
        </>
    )
}