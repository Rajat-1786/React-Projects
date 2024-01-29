import { useState } from "react";
import Player from "./components/Player"
import GameBoard from "./components/GameBoard";
function App() {
  const [activePlayer, setActivePlayer] = useState('X');

  function handleActivePlayer(){
    setActivePlayer((activePlayer)=> activePlayer === 'X' ? 'O' : 'X');
  }

  return (
    <> 
      <div id="game-container">
       <ol id="players" className="highlight-player"> 
        <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'}></Player>
        <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'}></Player>
       </ol>
        <GameBoard currentPlayer ={handleActivePlayer} activeSymbol={activePlayer}></GameBoard>
      </div>
      
    </>
    
  )
}

export default App
