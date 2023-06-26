import { useContext } from "react";

const X = () => <span className="text-green">X</span>;
const O = () => <span className="text-orange">O</span>;

export default function Square({ val, clickHandler }) {
    return (
        <button className="square" onClick={clickHandler}>
            {val === "X" && <X />}
            {val === "O" && <O />}
        </button>
    );
}
