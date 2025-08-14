import { useState } from "react";
import "./App.css";
import confetti from "canvas-confetti";
import Board from "./components/Board";
import TurnIndicator from "./components/TurnIndicator";
import WinnerModal from "./components/WinnerModal";
import { TURNS, ROLES } from "./constants/turns";
import { checkWinner } from "./utils/gameLogic";
import GameMode from "./components/GameMode";
import { getGroqAIMove, getOllamaAIMove } from "./services/aiLogic";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentTurn, setCurrentTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState(null);
  const [gameMode, setGameMode] = useState(ROLES[1]);

  const updateGameMode = (mode, board) => {
    if (board.every((cell) => cell === null)) setGameMode(mode);
  };

  // Function to reset the game
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentTurn(TURNS.X);
    setWinner(null);
  };

  const updateBoard = async (index) => {
    console.log(`Updating board at index: ${index}`);
    // Check if the square is already filled or game is over
    if (board[index] || winner) {
      return;
    }

    const newBoard = [...board];
    newBoard[index] = currentTurn;
    setBoard(newBoard);
    console.log(`Square ${index} clicked!`);

    // Check for winner after move
    let newWinner = checkWinner(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);
      return;
    }

    // Check for draw
    if (newBoard.every((cell) => cell !== null)) {
      setWinner(false); // Draw
      return;
    }

    // Switch turns
    const newTurn = currentTurn === TURNS.X ? TURNS.O : TURNS.X;
    setCurrentTurn(newTurn);

    // If it's AI mode and now it's AI's turn, make AI move
    if (gameMode === "ai" && newTurn === TURNS.O) {
      console.log("AI is making a move...");
      try {
        const aiMove = await getGroqAIMove(newBoard);
        console.log("AI Move:", aiMove);

        if (aiMove >= 0 && aiMove <= 8 && aiMove !== undefined && newBoard[aiMove] === null) {
          const aiBoard = [...newBoard];
          aiBoard[aiMove] = TURNS.O;
          setBoard(aiBoard);
          console.log(`Square ${aiMove} clicked by AI!`);

          // Check for winner after AI move
          const aiWinner = checkWinner(aiBoard);
          if (aiWinner) {
            confetti();
            setWinner(aiWinner);
            return;
          }

          // Check for draw after AI move
          if (aiBoard.every((cell) => cell !== null)) {
            setWinner(false);
            return;
          }

          // Switch back to player's turn
          setCurrentTurn(TURNS.X);
        }
      } catch (error) {
        console.error("Error getting AI move:", error);
      }
    }
  };

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <GameMode mode={gameMode} updateGameMode={updateGameMode} board={board} />
      {gameMode === "ai" && currentTurn === TURNS.O && <p>AI is thinking...</p>}
      <Board board={board} updateBoard={updateBoard} />
      <TurnIndicator turn={currentTurn} />
      <WinnerModal winner={winner} resetGame={resetGame} />
      <button onClick={resetGame}>Reset Game</button>
    </main>
  );
}

export default App;
