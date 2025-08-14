import { TURNS, ROLES } from '../constants/turns';

export default function GameMode({ mode, updateGameMode, board }) {
  // Use the prop 'mode' instead of creating local state
  const currentMode = mode || ROLES[1]; // Default to human vs ai

  const gameModeClass = (currentGameMode, targetMode) => {
    return currentGameMode === targetMode ? "active" : "";
  };

  return (
    <section className="game-mode">
      <button 
        className={gameModeClass(currentMode, ROLES[0])} 
        onClick={() => updateGameMode(ROLES[0], board)}
      >
        vs {ROLES[0].charAt(0).toUpperCase() + ROLES[0].slice(1).toLowerCase()}
      </button>
      <button 
        className={gameModeClass(currentMode, ROLES[1])} 
        onClick={() => updateGameMode(ROLES[1], board)}
      >
        vs {ROLES[1].toUpperCase()}
      </button>
    </section>
  );
}