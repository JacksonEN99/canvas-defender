export const variables = {
	// width & height are also defined in the style.css file
    canvas_width: 800, // Has to be a multiple of 50
    canvas_height: 450, // Has to be a multiple of 25

    // GAME variables
    game_speed_increment: 0.25, // How much faster the ball should move when a user goes to the next level
    game_lives: 2, // How many lives to start the game with
    game_levels: { min: 1, max: 2 }, // Determines how many rows of 'bricks' to create. Used in the 'buildBricks' function

    // BALL variables
    ball_size: 20,
    ball_speed: { x: 3, y: -4 }, // Initially 'x' has to be positive and 'y' has to be negative

    // BRICK variables
    brick_width: 50,
    brick_height: 25,

    // PADDLE variables
    paddle_width: 100,
    paddle_height: 20,
    paddle_color: "#00F",
    paddle_maxSpeed: 10,
    paddle_speed: 0,
}

export const GAMESTATE = {
    PAUSED: 0,
    RUNNING: 1,
    MENU: 2,
    GAMEOVER: 3, 
    NEWLEVEL: 4
}
