import { detectCollision } from "/src/collisionDetection.js";

// Determines how wide pac-man's mouth is open
const radians = [
    Math.PI * (1/6), // 30 degrees
    Math.PI * (1/4), // 45 degrees
    Math.PI * (1/3), // 60 degrees
    Math.PI * (1/2), // 90 degrees
    Math.PI * (2/3), // 120 degrees
    Math.PI * (3/4), // 135 degrees
    Math.PI * (5/6), // 150 degrees
    Math.PI * (1),   // 180 degrees
    Math.PI * (7/6), // 210 degrees
    Math.PI * (5/4), // 225 degrees
    Math.PI * (4/3), // 240 degrees
    Math.PI * (3/2), // 270 degrees
    Math.PI * (5/3), // 300 degrees
    Math.PI * (7/4), // 315 degrees
    Math.PI * (11/6), // 330 degrees
    Math.PI * (2)     // 360 degrees
]

function dotProduct(vector) {
    const dotPTop = vector.x + vector.y //Dot-product top
    const dotPBottom = Math.abs(vector.x) * Math.abs(vector.y)
    const dotPFinal = Math.floor(Math.acos(dotPTop/dotPBottom) * (180 / Math.PI))
    //console.log(`Top: ${dotPTop} B: ${dotPBottom} T: ${dotPFinal} degrees`)
}

//dotProduct({x:2, y:-1})

// // Angle between Two Vectors - Dot-product
// const angle = Math.acos( (1-1) / (1+1))
// console.log(angle)
// exit()

export default class Ball {

    constructor(game) {
        this.image = document.getElementById('ball');
        this.size = 30;
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
            this.reset();
        }
            
        if(detectCollision(this.game.paddle, this)) {
            this.speed.y *= -1;
            this.position.y = this.game.paddle.position.y - this.size;
        }
    }
}