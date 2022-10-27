import Brick from '/src/brick.js';

export function buildLevel(game, level) {
    let bricks = [];
    let space = 60;
    level.forEach((row, rowIndex) => {
        row.forEach((brick, brickIndex) => {
            if(brick === 1)
            {
                let position = {x: 50 * brickIndex, y: 25 * rowIndex + space};
                bricks.push(new Brick(game, position));
            }
        });
    });
    return bricks;
}

export const level1 = [
    [0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
    [1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1]
];

export const level2 = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1],
    [0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
    [1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];