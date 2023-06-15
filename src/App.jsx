import { useState } from "react";
import Board from "./components/Board"
import calculateWinner from "./utils";


export default function App() {

    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(false);

    const nextPlayer = isXNext ? 'X' : 'O';
    const nextPlayerMessage = `Next Player is ${nextPlayer}`;
    const winner = calculateWinner(squares) ? (isXNext ? 'O': 'X') : null;
    const winningMessage = winner ? `${winner} has won!` : '';

    const handleClick = clickPos => {

        if (squares[clickPos] || winner) return;

        setSquares(currentSquares => currentSquares.map((square, pos) => {
            if (pos == clickPos) return isXNext ? 'X' : 'O';
            return square;
        }));

        setIsXNext(currXNext => !currXNext);
    };

    return (
        <div className="app">
            <h2>{winner ? winningMessage : nextPlayerMessage}</h2>
            <Board squares={squares} handleClick={handleClick} />
        </div>
    )
}