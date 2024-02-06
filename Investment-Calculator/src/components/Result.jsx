import {calculateInvestmentResults} from "../util/investment";

export default function Result({userInput}){
    const annualData = calculateInvestmentResults(userInput)

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
                {annualData.map((Data, index) => (
                    <tr key={index}>
                        <td>{Data.year}</td>
                        <td>{Data.annualInvestment}</td>
                        <td>{Data.interest}</td>
                        <td>{Data.interest}</td>
                        <td>{Data.valueEndOfYear}</td>
                    </tr>
                ))}
            </tbody> 
        </table>
    )
}