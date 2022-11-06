import { variables } from './variables.js';
import Game from './game.js';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = variables.canvas_width
canvas.height = variables.canvas_height

let game = new Game(canvas.width, canvas.height);

let lastTime = 0;

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    game.update();
    game.draw(ctx);
    requestAnimationFrame(animate);
}
requestAnimationFrame(animate);