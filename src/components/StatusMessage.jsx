const StatusMessage = ({ squares, nextPlayer, winner }) => {
  const noEmptySquares = squares.every((square) => square !== null);

  const renderPlayer = (player) => {
    const color = player === "X" ? "text-green" : "text-orange";

    return <span className={color}>{player}</span>;
  };

  const renderMessage = () => {
    if (winner) return <>{renderPlayer(winner)} has won!</>;

    if (noEmptySquares)
      return (
        <>
          {renderPlayer("X")} and {renderPlayer("O")} have tied!
        </>
      );

    return <>Next Player is {renderPlayer(nextPlayer)}</>;
  };

  return <h2>{renderMessage()}</h2>;
};

export default StatusMessage;
