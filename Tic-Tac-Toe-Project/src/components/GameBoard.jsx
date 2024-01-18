export default function GameBoard(){
    let arr = [
        [null,null,null],
        [null,null,null],
        [null,null,null],
    ]

    return(
        <ol id="game-board">
            {arr.map((row, rowIndex) => (
            <li key={rowIndex}>
                <ol>
                    {row.map((col,colIndex) => (
                        <li key={colIndex}><button>{col}</button></li>
                    ))}
                </ol>
            </li>)
            )}
        </ol>
    );
}