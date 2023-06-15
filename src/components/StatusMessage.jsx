const StatusMessage = ({nextPlayer, winner, emptySquares}) => {
    if (winner) 
        return <h2>{winner} has won!</h2>
    
    if (emptySquares === 0) 
        return <h2>Draw!</h2>
    
    return <h2>Next Player is {nextPlayer}</h2>
};

export default StatusMessage;