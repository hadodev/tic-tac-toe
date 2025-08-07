import { useState } from 'react'
import './App.css'
import confetti from 'canvas-confetti';
import Board from './components/Board';
import TurnIndicator from './components/TurnIndicator';
import WinnerModal from './components/WinnerModal';
import { TURNS } from './constants/turns';
import { checkEndGame, checkWinner } from './utils/gameLogic';

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)  
  const [winner, setWinner] = useState(null)

  // Function to reset the game
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
  };


  const updateBoard = (index) => {
    // Check if the square is already filled
    if (board[index] || winner) {
      return; // If the square is filled or the game is over, do nothing
    }

    const newBoard = [...board]; // Create a copy of the board

    newBoard[index] = turn; // Update the square at the clicked index
    setBoard(newBoard); // Update the board state
    // Switch turns
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn); // Update the turn state
    console.log(`Square ${index} clicked!`); // Log the clicked square index

    // Check for a winner
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      confetti(); // Trigger confetti if there's a winner
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false); // Set winner to false if the game ends in a draw
    }
  }


  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Reset Game</button>
      <Board board={board} updateBoard={updateBoard} />
      <TurnIndicator turn={turn} />
      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  )
}

export default App
