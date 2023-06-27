import { useContext } from "react";

export default function Square({ val, clickHandler, winningCell }) {
    const textColor = val === "X" ? "text-green" : "text-orange";
    const winning = winningCell ? "winning" : "";

    return (
        <button
            className={`square ${textColor} ${winning}`}
            onClick={clickHandler}
        >
            {val}
        </button>
    );
}
