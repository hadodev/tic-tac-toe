import { WINNING_COMBINATIONS } from '../constants/gameConstants';

// Function to check end of the game
export const checkEndGame = (newBoard) => {
  return newBoard.every(square => square !== null);
};

// Function to check for a winner
export const checkWinner = (boardToCheck) => {
  for (const combination of WINNING_COMBINATIONS) {
    const [a, b, c] = combination;
    if (boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c]) {
      return boardToCheck[a]; // Return the winner ('x' or 'o')
    }
  }
  return null; // No winner found
};
