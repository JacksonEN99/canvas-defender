import Paddle from '/src/paddle.js';
import InputHandler from '/src/input.js';
import Ball from '/src/ball.js';
import { buildLevel, buildBricks } from '/src/levels.js';
import { updateMenu } from './functions.js';
import { variables } from './variables.js';

const GAMESTATE = {
    PAUSED: 0,
    RUNNING: 1,
    MENU: 2,
    GAMEOVER: 3, 
    NEWLEVEL: 4
};

export default class Game {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;

        this.gamestate = GAMESTATE.MENU;
        this.paddle = new Paddle(this);
        this.gameObjects = []; 
        this.bricks = [];
        this.ball = new Ball(this);
        new InputHandler(this.paddle, this);
        this.numRows = variables.game_levels;
        this.lives = variables.game_lives;
        this.score = 0;
        this.level = 1;
    }

    start() {
        if(this.gamestate !== GAMESTATE.MENU && this.gamestate !== GAMESTATE.NEWLEVEL) return;
        this.bricks = buildLevel(this, buildBricks(this.numRows.min, this.numRows.max));
        this.ball.reset();
        this.gameObjects = [this.ball, this.paddle];
        this.gamestate = GAMESTATE.RUNNING;
 
        updateMenu(this)
    }

    update() {
        if(this.lives === 0) this.gamestate = GAMESTATE.GAMEOVER;
        if(this.gamestate === GAMESTATE.PAUSED || 
            this.gamestate === GAMESTATE.MENU ||
            this.gamestate === GAMESTATE.GAMEOVER) return;

        if(this.bricks.length === 0) {
            this.level++;
            // Increase the number of rows of bricks every 5th level increase
            if(this.level % 5 === 0) {
                this.numRows.min++;
                this.numRows.max++;
            }
            // Gradually increse the speed of the ball after each level completion
            this.ball.speed.y = Math.abs(this.ball.speed.y) * -1 - variables.game_speed_increment;
            this.ball.speed.x = Math.abs(this.ball.speed.y) - 1;

            this.gamestate = GAMESTATE.NEWLEVEL;
            this.start();
        }
        
        [...this.gameObjects, ...this.bricks].forEach((object) => object.update());
        this.bricks = this.bricks.filter(brick => !brick .markedForDeletion);
    }

    draw(ctx) {
        [...this.gameObjects, ...this.bricks].forEach((object) => object.draw(ctx));

        let message;
        let rgba;

        if(this.gamestate === GAMESTATE.PAUSED) { message = "Paused",  rgba = 0.5 }
        if(this.gamestate === GAMESTATE.MENU) { message = "Press SPACEBAR To Start", rgba = 1 }
        if(this.gamestate === GAMESTATE.GAMEOVER) { message = "GAME OVER", rgba = 1 }

        if(this.gamestate !==  GAMESTATE.RUNNING) {
            ctx.rect(0, 0, this.gameWidth, this.gameHeight);
            ctx.fillStyle = `rgba(0,0,0,${rgba})`;
            ctx.fill();
            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText(message, this.gameWidth/2, this.gameHeight/2);    
        }
    }

    togglePause() {
        if(this.gamestate === GAMESTATE.PAUSED) {
            this.gamestate = GAMESTATE.RUNNING;
        } else {
            this.gamestate = GAMESTATE.PAUSED;
        }
    }
}