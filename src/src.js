import { variables } from '/src/variables.js';
import Game from '/src/game.js';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = variables.canvas_width
canvas.height = variables.canvas_height

let game = new Game(canvas.width, canvas.height);

let lastTime = 0;

function animate(timeStamp)
{
    let deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    game.update(deltaTime);
    game.draw(ctx);
    requestAnimationFrame(animate);
}
animate();