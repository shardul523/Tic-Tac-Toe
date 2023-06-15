import Square from "./Square";
import { useState } from "react";


export default function Board() {

    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(false);

    const handleClick = clickPos => {

        if (squares[clickPos]) return;

        setSquares(currentSquares => currentSquares.map((square, pos) => {
            if (pos == clickPos) return isXNext ? 'X' : 'O';
            return square;
        }));

        setIsXNext(currXNext => !currXNext);
    };

    const renderSquare = (pos) => <Square val={squares[pos]} clickHandler={()=>handleClick(pos)} />;

    return (
        <div className="board">
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    )
}