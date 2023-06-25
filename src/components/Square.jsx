import { useContext } from "react";

export default function Square({ val, clickHandler }) {
  return (
    <button className="square" onClick={clickHandler}>
      {val}
    </button>
  );
}
