export default function UserInput({userInput,handleChange}){

    return(
        <>
            <section id="user-input" >
            <div className="input-group">
            <p>
                <label>INITIAL INVESTMENT</label>
                <input type="number" value={userInput.initialInvestment} onChange={()=>handleChange('initialInvestment',event.target.value)} required></input>
            </p>
            <p>
                <label>ANNUAL INVESTMENT</label>
                <input type="number" value={userInput.annualInvestment} onChange={()=>handleChange('annualInvestment',event.target.value)} required></input>
            </p>
            </div>
            <div className="input-group">
            <p>
                <label>EXPECTED RETURN</label>
                <input type="number" value={userInput.expectedReturn} onChange={()=>handleChange('expectedReturn',event.target.value)} required></input>
            </p>
            <p>
                <label>DURATION</label>
                <input type="number" value={userInput.duration} onChange={()=>handleChange('duration',event.target.value)} required></input>
            </p>
            </div>
            </section>
        </>
    )
}