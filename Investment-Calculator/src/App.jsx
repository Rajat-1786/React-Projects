import UserInput from "./components/UserInput";
import { useState } from "react";
import Result from "./components/Result";

function App() {
  const[userInput,setVal] = useState({
  initialInvestment: 10000,
  annualInvestment: 6000,
  expectedReturn: 5,
  duration: 6
});

function onChangeHandler(fieldname,newVal){
  setVal((newUserInput)=>{
    return{
    ...newUserInput,
    [fieldname]: +newVal
    }
  });
}

const isValid = userInput.duration>=1;

  return (
    <>
      <UserInput userInput={userInput} handleChange={onChangeHandler}></UserInput>
      { isValid?<Result userInput={userInput}></Result>:<p>Please Enter the correct duration</p>}
    </>
  )
}

export default App
