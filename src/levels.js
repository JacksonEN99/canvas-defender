import { variables } from './variables.js';
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

export function buildBricks(min, max) {
    const rows = Math.floor(Math.random() * (max - min + 1) + min)
    const columns = variables.canvas_width / 50
    let bricks = []

    for(let x = 0; x < rows; x++) {
        let a = []
        for(let y = 0; y < columns; y++) {
            a.push(Math.floor(Math.random() * (2)) ? 1 : 0)
        }
        bricks.push(a)
    }
    return bricks
   //return [[0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0]]
}

// export const level1 = [
//     [0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
//     [1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1],
//     [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
//     [1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1]
// ];

// export const level2 = [
//     [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
//     [1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1],
//     [0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
//     [1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1],
//     [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
// ];