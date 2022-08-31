import pipesMotion from "./main";
import { startGame } from "./main";
import MotionBird from "./bird";
import { addPoint } from "./score";

const bird_div = document.getElementById("flappy-bird") as HTMLDivElement;
let pastPipeArray: HTMLImageElement[] = []; 

/**
 * fn that check the position of the bird respect to that of pipes
 * if bird's position overlap one of the pipe's position -> game over
 * @param pipe1
 * @param pipe2
 */
let gameOver = (pipe1: HTMLImageElement, pipe2: HTMLImageElement) => {
    let rectPipeDown!: DOMRect;
    let rectPipeUp!: DOMRect;
    let rectBird!: DOMRect;
    if (pastPipeArray.every((pastPipe)=> pipe2 !== pastPipe )) {
        rectPipeDown = pipe1.getBoundingClientRect();
        rectPipeUp = pipe2.getBoundingClientRect();
        rectBird = bird_div.getBoundingClientRect();
    }
    if (rectPipeDown === undefined) return true
    if (rectPipeUp === undefined) return true
    if (rectBird === undefined) return true

    let diffRightBird = rectBird.right + rectBird.width
    let diffHeightBird = rectBird.y + rectBird.height
    let diffHeightPipeDown = rectPipeDown.y + rectPipeDown.height 
    let diffHeightPipeUp = rectPipeUp.y + rectPipeUp.height
    
    
    if (
        ((rectPipeUp.right >= rectBird.right && rectPipeUp.right <= diffRightBird) &&
        (diffHeightBird > rectPipeUp.y || rectBird.y < diffHeightPipeDown )) || 
        (rectBird.y < rectPipeDown.y || rectBird.y + rectBird.height > diffHeightPipeUp) 
        ) {
        window.removeEventListener("keyup", startGame)
        clearInterval(MotionBird.handler)
        if (rectBird.y + rectBird.height > diffHeightPipeUp) {
            bird_div.removeAttribute("style")
            bird_div.classList.remove("set-start-flappy")
            bird_div.style.bottom = "0%"
        }

        if (rectBird.y < rectPipeDown.y) {
            bird_div.removeAttribute("style")
            bird_div.style.top = "0%"
        }
        clearInterval(pipesMotion)
        return false;
    }
    if (rectPipeUp.right < rectBird.right && pastPipeArray.every((pastPipe)=> pipe2 !== pastPipe )) {
        addPoint()
        let pastPipe = pipe2;
        pastPipeArray.push(pastPipe);
    }
    return true
};

export default gameOver;
