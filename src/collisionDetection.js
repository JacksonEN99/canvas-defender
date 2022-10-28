export function detectCollision(gameObject, ball) {
    const topOfBall = ball.position.y;
    const bottomOfBall = ball.position.y + ball.size;
    const leftSideOfBall = ball.position.x;
    const rightSideOfBall = ball.position.x + ball.size;

    const topOfObject = gameObject.position.y;
    const bottomOfObject = gameObject.position.y + gameObject.height;
    const leftSideOfObject = gameObject.position.x;
    const rightSideOfObject = gameObject.position.x + gameObject.width;

    if(bottomOfBall >= topOfObject && 
        topOfBall <= bottomOfObject &&
        leftSideOfBall >= leftSideOfObject &&
        rightSideOfBall <= rightSideOfObject) {
        return true;
    } else {
        return false;
    }
}