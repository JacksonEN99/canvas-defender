import { variables } from "./src/variables.js";

export default class Paddle {
    constructor(game) {
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.width = variables.paddle_width;
        this.height = variables.paddle_height;
        this.color = variables.paddle_color;
        this.maxSpeed = variables.paddle_maxSpeed;
        this.speed = variables.paddle_speed;
        this.position = {x: this.gameWidth/2 - this.width/2, 
                        y: this.gameHeight - this.height - 10};
    }

    moveLeft() {
        this.speed = -this.maxSpeed;
    }

    moveRight() {
        this.speed = this.maxSpeed;
    }

    stop() {
        this.speed = 0;
    }

    getSpeed() {
        return this.speed;
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update() {
        this.position.x += this.speed;
        
        if(this.position.x < 0)
            this.position.x = 0
        if(this.position.x > this.gameWidth - this.width)
            this.position.x = this.gameWidth - this.width;
    }
}