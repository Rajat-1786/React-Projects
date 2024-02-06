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
    [fieldname]: newVal
    }
  });
}

  return (
    <>
      <UserInput userInput={userInput} handleChange={onChangeHandler}></UserInput>
      <Result userInput={userInput}></Result>
    </>
  )
}

export default App
