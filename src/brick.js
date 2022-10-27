import { detectCollision } from "/src/collisionDetection.js";

export default class Brick {
    constructor(game, position) {
        this.image = document.getElementById('brick');
        this.position = position;
        this.width = 50;
        this.height = 25;
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
        }
    }
}