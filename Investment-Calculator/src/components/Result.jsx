import {calculateInvestmentResults,formatter} from "../util/investment";

export default function Result({userInput}){
    const annualData = calculateInvestmentResults(userInput)
    const initialInvestment = annualData[0].valueEndOfYear-annualData[0].interest-annualData[0].annualInvestment;

    console.log(annualData);
    return(
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment value</th>
                    <th>Interest(Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Captial</th>
                </tr>     
            </thead>
            <tbody>
                {annualData.map((Data, index) => {
                    const totalInterest = Data.valueEndOfYear-Data.annualInvestment*Data.year-initialInvestment; 
                    const TotalAmountInvested = Data.valueEndOfYear-Data.interest;
                    return (<tr key={Data.year}>
                        <td>{Data.year}</td>
                        <td>{formatter.format(Data.valueEndOfYear)}</td>
                        <td>{formatter.format(Data.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(TotalAmountInvested)}</td>
                    </tr>)
                })}
            </tbody> 
        </table>
    )
}