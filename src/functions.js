// Updates the MENU with current score, lives, level and speed of the ball
export function updateMenu(object) {
    score.children[0].innerHTML = object.score;
    lives.children[0].innerHTML = object.lives;
    level.children[0].innerHTML = object.level;
    speed.children[0].innerHTML = `${magnitude(object.ball.speed).toFixed(1)} ft/s`;
}

// Returns a point on the 'ball', based upon the direction of the ball, that will be the point that touches other objects first
export function contactPoint(ball) {
    // Find the center coordinates of the 'ball' [position.x/.y are the coordinates of the top-left of the ball picture]
    const center = { x: ball.position.x + ball.size/2, y: ball.position.y + ball.size/2 }
    const angle = angleBetweenVectors(ball.speed.x, ball.speed.y)
    const point = pointOnBall(ball.size/2, angle)

    return { x: parseInt(center.x) + parseInt(point.x), y: parseInt(center.y) - parseInt(point.y) }
}

// Returns the angle (in radians) between the 'balls' two x & y's speed vectors
function angleBetweenVectors(x, y) {
    y *= -1 // Switch 'y' due to 'positive' being down, not up, in the web broswser
    const angle = Math.atan(y/x)
    const quadrant = Math.PI/2

    if(x > 0 && y > 0) {
        return angle // First quadrant
    } else if(x < 0 && y > 0) {
        return (angle + quadrant * 2) // Second quadrant
    }    else if(x < 0 && y < 0) {
        return (angle + quadrant * 2) // Third quadrant
    } else if(x > 0 && y < 0) {
        return (angle + quadrant * 4) // Fourth quadrant
    }
}

// Returns a point on the 'ball' given the radius and an angle (in radians) from the x-axis
function pointOnBall(radius, angle) {
    const x = radius * Math.cos(angle)
    const y = radius * Math.sin(angle)

    return {x: x, y: y}
}

// Returns the length, speed, of the point, a, from the origin of the unit circle
function magnitude(a) {
    return Math.sqrt(a.x * a.x + a.y * a.y)
}