const History = ({ history, currMove, moveTo }) => {
    return (
        <div className="history-wrapper">
            <ul className="history">
                {history.map((_, index) => {
                    return (
                        <li key={index}>
                            <button
                                className={`btn-move ${
                                    index === currMove ? "active" : ""
                                }`}
                                onClick={() => moveTo(index)}
                            >
                                {index === 0
                                    ? "Goto game start"
                                    : `Goto move #${index}`}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default History;
