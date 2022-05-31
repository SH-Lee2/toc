const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

// 승자 계산
export const calcWinner = (board) => {
    for (const line of lines) {
        const [a, b, c] = line;
        if (
            board[a] &&
            board[a] === board[b] &&
            board[a] === board[c] &&
            board[b] === board[c]
        ) {
            return { line, winner: board[a] };
        }
    }
    return null;
};
calcWinner("a");

export default function calcBestMove(board, player) {
    const getArrDuplicatedCount = (arr) => {
        let count = 0;
        arr.forEach((i) => {
            if (board[i] === player) {
                count += 1;
            }
        });
        return count;
    };

    const sortedLines = lines.sort((a, b) => {
        let acount = getArrDuplicatedCount(a);
        let bcount = getArrDuplicatedCount(b);
        return bcount - acount;
    });

    for (let i = 0; i < sortedLines.length; i++) {
        let val = sortedLines[i].find((el) => {
            if (board[el] === "") {
                return el + "";
            }
            return null;
        });

        if (!val) {
            continue;
        }
        return +val;
    }
    return null;
}
