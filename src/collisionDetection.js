import contactPoint from './functions.js'

export function detectCollision(gameObject, ball) {
    const topOfObject = gameObject.position.y;
    const bottomOfObject = gameObject.position.y + gameObject.height;
    const leftSideOfObject = gameObject.position.x;
    const rightSideOfObject = gameObject.position.x + gameObject.width;

    const ballPosition = contactPoint(ball)

    if( ballPosition.x >= leftSideOfObject &&
        ballPosition.x <= rightSideOfObject &&
        ballPosition.y <=  bottomOfObject &&
        ballPosition.y >= topOfObject) {
        return true
    } else { return false }
}