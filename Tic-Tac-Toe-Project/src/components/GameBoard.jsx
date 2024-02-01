
export default function GameBoard({currentPlayer,turns}){
    return(
        <ol id="game-board">
            {turns.map((row, rowIndex) => (
            <li key={rowIndex}>
                <ol>
                    {row.map((player,colIndex) => (
                        <li key={colIndex}>
                            <button onClick={() => currentPlayer(rowIndex,colIndex)} disabled={player !== null}>{player}</button>
                        </li>
                    ))}
                </ol>
            </li>)
            )}
        </ol>
    );
}