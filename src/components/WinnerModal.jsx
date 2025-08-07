import confetti from 'canvas-confetti';
import Square from './Square';

const WinnerModal = ({ winner, resetGame }) => {
  if (winner === null) return null;

return (
    <section className="winner">
        <div className="text">
            <h2>{winner === false ? 'Draw!' : `Winner:`}</h2>
            <header>
                {winner && <Square>{winner}</Square>}
            </header>
            <footer>
                <button onClick={resetGame}>Play Again</button>
            </footer>
        </div>
    </section>
);
};

export default WinnerModal;
