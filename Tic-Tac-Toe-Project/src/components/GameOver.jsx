export default function GameOver({winner, onRestart}){
    return(
        <div id="game-over">
            <h2>Game Over</h2>
            {!winner && <h2>Draw</h2>}
            {winner && <h2>{winner} Won!</h2>}
            <button onClick={onRestart}>Rematch!</button>
        </div>
    )
}