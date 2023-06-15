export default function calculateWinner(squares) {
    const winComb = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    for (let comb of winComb) {
        const [i, j, k] = comb;

        if (squares[i] && squares[i] === squares[j] && squares[i] === squares[k])
            return true;
    }

    return false;
}