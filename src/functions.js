function dotProduct(a, b) {
    const A = a.x * b.x
    const B = a.y * b.y
    return A + B
}

function magnitude(a) {
    return Math.sqrt(a.x * a.x + a.y * a.y).toFixed(2)
}

function radiansToDegrees(x) {
    return (x * (180/Math.PI)).toFixed(2)
}

function angleBetweenVectors(a, b) {
    return Math.acos(dotProduct(a,b) / (magnitude(a) * magnitude(b))).toFixed(2)
}

function lengthOfVector(a, b) {
    return Math.sqrt((a.x * a.x) + (a.y * a.y) + (b.x * b.x) + (b.y * b.y)).toFixed(2)
}

function angleOrthogonalVectors(x, y) {
    const angle = Math.atan(y/x) // Radians to Degrees
    const quadrant = Math.PI/2

    if(x > 0 && y < 0) {
        return (angle + quadrant).toFixed(2) // First quadrant
    } else if(x < 0 && y < 0) {
        return (angle + quadrant).toFixed(2)  // Second quadrant
    }    else if(x < 0 && y > 0) {
        return (angle + quadrant * 3).toFixed(2) // Third quadrant
    } else if(x > 0 && y > 0) {
        return (angle + quadrant * 3).toFixed(2) // Fourth quadrant
    }
}

// 'angle' is in radians
function pointOnCircle(radius, angle) {
    const x = radius * Math.cos(angle).toFixed(2)
    const y = radius * Math.sin(angle).toFixed(2)

    return {x: x, y: y}
}

function newPosition(ball) {
    const angle = angleOrthogonalVectors(ball.speed.x, ball.speed.y)
    const pointOnUnitCircle = pointOnCircle(ball.size/2, angle)
    const newPosition = {x: parseFloat(ball.position.x) + parseFloat(pointOnUnitCircle.x),
         y: parseFloat(ball.position.y) - parseFloat(pointOnUnitCircle.y) }
    return newPosition
}

export   {
    dotProduct,
    magnitude,
    radiansToDegrees,
    angleBetweenVectors,
    lengthOfVector,
    angleOrthogonalVectors,
    pointOnCircle,
    newPosition
}

// Positive X: 1st/4th quadrants <=> Negative X: 3rd/2nd quadrants
// Positive Y: 3rd/4th quadrants <=> Negative Y: 1st/2nd quadrants
// const a = 1
// const b = 2

// const ball = {
//     speed: {x: -1, y: 2},
//     position: {x: 100, y: 100},
//     size: 30
// }

// console.dir(newPostition(ball))