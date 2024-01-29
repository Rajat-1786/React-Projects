import { useState } from "react";

let initialArr = [
    [null,null,null],
    [null,null,null],
    [null,null,null],
]

export default function GameBoard({currentPlayer,activeSymbol}){
    
    const [gameboard, setGameBoard] = useState(initialArr);

    function handleClick(rowIndex, colIndex){
        setGameBoard((previousGameBoard) =>{
            const updatedGameBoard = [...previousGameBoard];
            updatedGameBoard[rowIndex][colIndex] = activeSymbol;
            return updatedGameBoard;
        })

        currentPlayer();
    }

    return(
        <ol id="game-board">
            {gameboard.map((row, rowIndex) => (
            <li key={rowIndex}>
                <ol>
                    {row.map((col,colIndex) => (
                        <li key={colIndex}>
                            <button onClick={()=> handleClick(rowIndex,colIndex)}>{col}</button>
                        </li>
                    ))}
                </ol>
            </li>)
            )}
        </ol>
    );
}