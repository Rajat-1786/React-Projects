import { useState } from "react";
import Player from "./components/Player"
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import GameOver from "./components/GameOver";
import {WINNING_COMBINATIONS} from '../winning-combinations'


let initialArr = [
  [null,null,null],
  [null,null,null],
  [null,null,null],
]

function derivedCurrentPlayer(gameTurns){
  let currentPlayer = 'X';

  if(gameTurns.length> 0 && gameTurns[0].player === 'X'){
    currentPlayer = 'O';
  };

  return currentPlayer;
}


function App() {
  const [gameTurns, setGameTurns] = useState([])
  const [players,setPlayers] = useState({
    'X':'PLAYER 1',
    'O':'PLAYER 2'
  })
  const activePlayer = derivedCurrentPlayer(gameTurns);

  function handleReset(){
    setGameTurns([]);
  }

  function handlePlayerName(symbol,name){
    setPlayers((prevPlayer) => {
      return {
        ...prevPlayer,
        [symbol]: name
      };
    });

  }

  let gameboard = [...initialArr.map(innerArray => [...innerArray])];

  for (const turn of gameTurns){
      const {square, player} = turn;
      const {row,col} = square;

      gameboard[row][col] = player
  }

  let winner ;

  for (const combination of WINNING_COMBINATIONS){
    const firstSymbol = gameboard[combination[0].row][combination[0].column];
    const secondSymbol = gameboard[combination[1].row][combination[1].column];
    const thirdSymbol = gameboard[combination[2].row][combination[2].column];

    if(firstSymbol && firstSymbol === secondSymbol && firstSymbol === thirdSymbol){
      winner = players[firstSymbol];
    }
  }

  let hasDraw;
  if(gameTurns.length === 9 && !winner){
    hasDraw = true;
  }

  function handleActivePlayer(rowIndex, colIndex){

    setGameTurns((prevTurns) => {
      const activePlayer = derivedCurrentPlayer(gameTurns);

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex}, player: activePlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });

  }

  
  return (
    <> 
      <div id="game-container">
       <ol id="players" className="highlight-player"> 
        <Player initialName={players.X} symbol="X" isActive={activePlayer === 'X'} onNameChange={handlePlayerName}></Player>
        <Player initialName={players.O} symbol="O" isActive={activePlayer === 'O'} onNameChange={handlePlayerName}></Player>
       </ol>
       {winner && <GameOver  winner={winner} onRestart={handleReset}></GameOver>}
       {hasDraw && <GameOver></GameOver>}
        <GameBoard currentPlayer ={handleActivePlayer} turns={gameboard}></GameBoard>
      </div>
      <Log turns={gameTurns}/>
    </>
    
  )
}

export default App
