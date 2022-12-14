import { GAMESTATE } from "./variables.js";

export default class InputHandler
{
    constructor(paddle, game) {
        document.addEventListener('keydown', (e) => {
            switch(e.keyCode)
            {
                case 37:
                    paddle.moveLeft();
                    break;
                case 39:
                    paddle.moveRight();
                    break;
                case 27:
                    game.togglePause();
                    break;
                case 32:
                    game.gamestate = GAMESTATE.MENU;
                    game.start();
                    break;
            }
        });

        document.addEventListener('keyup', (e) => {
            switch(e.keyCode)
            {
                case 37:
                    if(paddle.getSpeed() < 0)
                        paddle.stop();
                    break;
                case 39:
                    if(paddle.getSpeed() > 0)
                        paddle.stop();
                    break;
            }
        });
    }
}