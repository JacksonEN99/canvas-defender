import { detectCollision } from "/src/collisionDetection.js";
import { updateMenu } from './functions.js';
import { variables } from "./variables.js";

export default class Brick {
    constructor(game, position) {
        this.image = document.getElementById('brick');
        this.position = position;
        this.width = variables.brick_width;
        this.height = variables.brick_height;
        this.game = game;
        this.markForDeletion = false;
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }

    update() {
        if(detectCollision(this, this.game.ball)) {
            this.game.ball.speed.y *= -1;
            this.markedForDeletion = true;
            this.game.score += 50;
            updateMenu(this.game)
        }
    }
}