import { detectCollision } from "/src/collisionDetection.js";

export default class Ball {

    constructor(game) {
        this.image = document.getElementById('ball');
        this.size = 25;
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.game = game;
        this.reset();
    }

    reset() {
        this.speed = { x: 2, y: -2 };
        this.position = { x: 50, y: 400 };
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.size, this.size);
    }

    update(deltaTime) {
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;

        // Wall on left or right
        if(this.position.x > this.gameWidth - this.size || this.position.x < 0)
            this.speed.x *= -1;
        // Wall on top
        if(this.position.y < 0)
            this.speed.y *= -1;
        // Bottom
        if(this.position.y > this.gameHeight -this.size) {
            this.game.lives--;
            this.reset();
        }
            
        if(detectCollision(this.game.paddle, this)) {
            this.speed.y *= -1;
            this.position.y = this.game.paddle.position.y - this.size;
        }
    }
}