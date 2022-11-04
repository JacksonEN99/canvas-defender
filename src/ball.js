import { variables } from './variables.js'
import { detectCollision } from "/src/collisionDetection.js";
import { updateMenu } from './functions.js';

export default class Ball {

    constructor(game) {
        this.image = document.getElementById('ball');
        this.size = 20;
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.game = game;
        this.reset();
    }

    reset() {
        this.speed = { x: 4 , y: -5 };
        this.position = { x: 0 , y: variables.canvas_height - this.size };
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.size, this.size);
    }

    update() {
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;

        // Wall on left or right
        if(this.position.x + this.size >= this.gameWidth || this.position.x <= 0)
            this.speed.x *= -1;
        // Wall on top
        if(this.position.y <= 0)
            this.speed.y *= -1;
        // Wall at the Bottom
        if(this.position.y + this.size >= this.gameHeight) {
            this.game.lives--;
            updateMenu(this.game);
            this.reset();
        }
            
        if(detectCollision(this.game.paddle, this)) {
            this.speed.y *= -1;
            this.position.y = this.game.paddle.position.y - this.size;
        }
    }
}