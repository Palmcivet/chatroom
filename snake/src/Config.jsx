export const Config = {
    bgLine: 25,
    bgCell: 25,
    /**
     * NULL: N
     * Food: F
     * Head: H
     * Body: B
     */
    bgStyle: ['N', 'F', 'H', 'B'],
    dirA: ['U', 'D', 'L', 'R'],
    dirB: ['W', 'S', 'A', 'D'],
    spdSnake: 400, // 0.4s per cell
    spdRefresh: 200, // 0.2s
}

// Temporary
let Table = new Array()
for (let i = 0; i < Config.bgLine; i++) {
    Table[i] = new Array(i);
    for (let j = 0; j < Config.bgCell; j++) {
        // Table[i][j] = 'N';
        Table[i][j] = Config.bgStyle[0];
    }
}

export default Table