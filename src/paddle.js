export default class Paddle
{
    constructor(game) {
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.width = 100;
        this.height = 20;
        this.color = '#00F';
        this.maxSpeed = 5;
        this.speed = 0;
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

    update(deltaTime) {
        this.position.x += this.speed;
        
        if(this.position.x < 0)
            this.position.x = 0
        if(this.position.x > this.gameWidth - this.width)
            this.position.x = this.gameWidth - this.width;
    }
}