import { contactPoint } from './functions.js'

export function detectCollision(gameObject, ball) { 
    // Returns a point on the BALL, based upon the direction of the BALL
    const ballPosition = contactPoint(ball)

    const topOfObject = gameObject.position.y;
    const bottomOfObject = gameObject.position.y + gameObject.height;
    const leftSideOfObject = gameObject.position.x;
    const rightSideOfObject = gameObject.position.x + gameObject.width;

    // Return TRUE is BALL has touched another OBJECT
    if( ballPosition.x >= leftSideOfObject &&
        ballPosition.x <= rightSideOfObject &&
        ballPosition.y <=  bottomOfObject &&
        ballPosition.y >= topOfObject) {
        return true
    } else { return false }
}