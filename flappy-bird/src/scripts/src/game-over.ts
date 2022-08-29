const bird_div = document.getElementById("flappy-bird") as HTMLDivElement;

/**
 * fn that check the position of the bird respect to that of pipes
 * if bird's position overlap one of the pipe's position -> game over
 * @param pipe1
 * @param pipe2
 */
let checkGameOver = (pipe1: HTMLImageElement, pipe2: HTMLImageElement) => {
    let rectPipeDown = pipe1.getBoundingClientRect();
    let rectPipeUp = pipe2.getBoundingClientRect();
    let rectBird = bird_div.getBoundingClientRect();
    let diffRightBird = rectBird.right + rectBird.width
    let diffHeightBird = rectBird.y + rectBird.height
    let diffHeightPipeDown = rectPipeDown.y + rectPipeDown.height 
    let diffHeightPipeUp = rectPipeUp.y + rectPipeUp.height 

    if (
        ((rectPipeUp.right >= rectBird.right && rectPipeUp.right <= diffRightBird) &&
        (diffHeightBird > rectPipeUp.y || rectBird.y < diffHeightPipeDown )) || 
        (rectBird.y < rectPipeDown.y || rectBird.y > diffHeightPipeUp) 
    ) {
        console.log("game over");
    }
};

export default checkGameOver;
