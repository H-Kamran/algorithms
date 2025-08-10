/* Function check if  a polyomino fits in a given board
A polyomino is a figure created by joining multiple squares of equal sizes.
1 represents presence, 0 represents absence of square.
*/

function getSizesOfPolyomino(polyomino) {
    let width = 0;
    let height = polyomino.length;
    for (row of polyomino) {
        if (row.length > width) width = row.length;
    }
    return [width, height];
}

function polyominoFits(polyomino, board) {
    let [width, height] = getSizesOfPolyomino(polyomino);
    let [boardWidth, boardHeight] = [board[0].length, board.length];
    let fit = true;

    // If the polyomino is larger than the board in either dimension, it can't fit
    if (width > boardWidth || height > boardHeight) {
        return false;
    }

    // Placing the polyomino at every possible position (heightGap, widthGap) on the board
    // heightGap is vertical offset where the polyomino's top row will be placed
    // widthGap is horizontal offset where the polyomino's leftmost column will be placed
    for (let heightGap = 0; heightGap <= boardHeight - height; heightGap++) {
        for (let widthGap = 0; widthGap <= boardWidth - width; widthGap++) {
            for (let i = 0; i < height; i++) {
                for (let j = 0; j < polyomino[i].length; j++) {
                    if (polyomino[i][j] === 1 && board[i + heightGap][j + widthGap] === 1) fit = false;
                }
            }
            if (fit === true) {
                return true;
            }
            fit = true;
        }
    }
    return false;
}

console.log(polyominoFits([[1, 1], [1, 0]], [[0, 0, 0], [0, 1, 0], [0, 1, 0]]));