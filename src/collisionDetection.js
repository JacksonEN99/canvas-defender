import {newPosition} from './functions.js'

export function detectCollision(gameObject, ball) {

   //const velocity = Math.sqrt(Math.pow(ball.speed.x, 2)  + Math.pow(ball.speed.y, 2))

    const topOfBall = ball.position.y;
    const bottomOfBall = ball.position.y + ball.size;
    const leftSideOfBall = ball.position.x;
    const rightSideOfBall = ball.position.x + ball.size;

    const topOfObject = gameObject.position.y;
    const bottomOfObject = gameObject.position.y + gameObject.height;
    const leftSideOfObject = gameObject.position.x;
    const rightSideOfObject = gameObject.position.x + gameObject.width;

    const ballPosition = newPosition(ball)

     if(bottomOfBall >= topOfObject && 
        topOfBall <= bottomOfObject &&
        leftSideOfBall >= leftSideOfObject &&
        rightSideOfBall <= rightSideOfObject) {
            console.log(`X: ${ballPosition.x} Y: ${ballPosition.y}`)
            console.log(`topOfObject: ${topOfObject} bottomOfObject: ${bottomOfObject} leftSide: ${leftSideOfObject} rightSide: ${rightSideOfObject}`)

        return true;
    } else {
        return false;
    }
}