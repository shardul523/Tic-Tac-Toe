import { useState } from "react";

import Board from "./components/Board";
import calculateWinner from "./utils";
import StatusMessage from "./components/StatusMessage";
import History from "./components/History";

const NEW_GAME = [{ squares: Array(9).fill(null), isXNext: true }];

export default function App() {
    const [history, setHistory] = useState(NEW_GAME);
    const [currentMove, setCurrentMove] = useState(0);

    const { squares, isXNext } = history[currentMove];

    const winnerExists = calculateWinner(squares);
    const nextPlayer = isXNext ? "O" : "X";
    const winningPlayer = winnerExists
        ? nextPlayer === "X"
            ? "O"
            : "X"
        : null;

    const handleSquareClick = clickPosition => {
        const gamingBoard = history[currentMove];

        if (gamingBoard.squares[clickPosition] || winnerExists) return;

        console.log(gamingBoard);

        setHistory(prevHistory => {
            const newSquares = [...gamingBoard.squares];
            newSquares[clickPosition] = gamingBoard.isXNext ? "O" : "X";
            const newIsXNext = !gamingBoard.isXNext;

            const newState = {
                squares: newSquares,
                isXNext: newIsXNext,
            };

            const newHistory = prevHistory.slice(0, currentMove + 1);
            newHistory.push(newState);
            console.log(newHistory);
            return newHistory;
        });

        setCurrentMove(prevCurrMove => prevCurrMove + 1);
    };

    const moveTo = position => setCurrentMove(position);

    const resetGame = () => {
        setHistory(NEW_GAME);
        setCurrentMove(0);
    };

    return (
        <div className="app">
            <StatusMessage
                squares={squares}
                nextPlayer={nextPlayer}
                winner={winningPlayer}
            />
            <Board squares={squares} handleClick={handleSquareClick} />
            <button
                type="button"
                className={`btn-reset ${winnerExists ? "active" : ""}`}
                onClick={resetGame}
            >
                Start Game
            </button>
            <h2>Current Game History</h2>
            <History history={history} currMove={currentMove} moveTo={moveTo} />
        </div>
    );
}
