import { useState } from "react";
import Board from "./components/Board"
import calculateWinner from "./utils";
import StatusMessage from "./components/StatusMessage";


export default function App() {

    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(false);
    const [emptySquares, setEmptySquares] = useState(9);

    const nextPlayer = isXNext ? 'X' : 'O';
    const winner = calculateWinner(squares) ? (isXNext ? 'O': 'X') : null;

    const handleClick = clickPos => {

        if (squares[clickPos] || winner) return;

        setSquares(currentSquares => currentSquares.map((square, pos) => {
            if (pos == clickPos) {
                setEmptySquares(prevEmptySquares => prevEmptySquares - 1);
                return isXNext ? 'X' : 'O';
            }
            return square;
        }));

        setIsXNext(currXNext => !currXNext);
    };

    return (
        <div className="app">
            <StatusMessage winner={winner} emptySquares={emptySquares} nextPlayer={nextPlayer} />
            <Board squares={squares} handleClick={handleClick} />
        </div>
    )
}