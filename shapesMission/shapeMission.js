document.getElementById('plus').addEventListener('click', addShape);
$('.shapes').on('click', myFunc);


function addShape() {
    const [r, g, b] = [randomNumber(256), randomNumber(256), randomNumber(256)];
    const shapeSize = randomNumber(60);
    const shape = randomNumber(3)
    const topPosition = 120 + randomNumber(window.innerHeight - 120);
    const leftPosition = randomNumber(window.innerWidth);
    console.log(shape)
    if (shape === 0) { // rectangle
        $('#shapesCanvas').append(`<div class="shapes" style="background-color:rgb(${r}, ${g}, ${b});position: absolute; top:${topPosition - shapeSize}px; left:${leftPosition + 2 * shapeSize}px; height:${shapeSize}px; width: ${2 * shapeSize}px;"></div>`);
    }
    else if (shape === 1) { // square
        $('#shapesCanvas').append(`<div class="shapes" style="background-color:rgb(${r}, ${g}, ${b});position: absolute; top:${topPosition - shapeSize}px; left:${leftPosition + 2 * shapeSize}px; height:${shapeSize}px; width: ${shapeSize}px;"></div>`);
    }
    else if (shape === 2) { // triangle
        $('#shapesCanvas').append(`<div class="shapes" style="border-left: ${shapeSize}px solid transparent; border-right: ${shapeSize}px solid transparent; border-bottom: ${shapeSize}px solid rgb(${r}, ${g}, ${b}); position: absolute; top:${topPosition - shapeSize}px; left:${leftPosition - shapeSize}px;"></div>`);
    }

}

function randomNumber(maxNumber) {
    return Math.floor(Math.random() * Math.floor(maxNumber));
}

function handleRotateShape() {
    const target = document.getElementsByClassName('target')[0];
    if (target)
        target.className += ' rotate';
}

