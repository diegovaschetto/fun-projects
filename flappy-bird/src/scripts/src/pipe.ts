import gameOver from "./game-over"
const gameContainer_div = document.getElementById("container-game") as HTMLDivElement

/**
 * useful to generate a random number among min and max
 * @param min 
 * @param max 
 */
let randomNumber = (min : number, max: number) : number => {
    return Math.round(Math.random()*(min-max) + max)
}

interface PipeInt {
    heightPipe1?: number
    heightPipe2?: number
    hole: number 
}

class Pipe implements PipeInt {
    hole: number 

    constructor () {
        this.hole = randomNumber(20,30)
    }

    generateHeightPipesBasedOnHole (pipe: PipeInt) {
        let remainSpace = 100 - this.hole;
        pipe.heightPipe1 = randomNumber(0,remainSpace);
        let maxGap = remainSpace - 10;
        
        while(pipe.heightPipe1 <= 10 || pipe.heightPipe1 >= maxGap){
            pipe.heightPipe1 = randomNumber(0,remainSpace);
        }
        pipe.heightPipe2 = remainSpace - pipe.heightPipe1;
    }
}


let nextMovement = (pipe1: HTMLImageElement , pipe2: HTMLImageElement) => {
    let pipe1Position = parseFloat(pipe1.style.right)
    let pipe2Position = parseFloat(pipe2.style.right)
    let handler = setTimeout(() => {
        pipe1.style.right = `${pipe1Position+0.5}%` 
        pipe2.style.right = `${pipe2Position+0.5}%`
        gameOver(pipe1, pipe2);
        logicMotionPipes(pipe1, pipe2)
    }, 25);
}

/**
 * fn that display on or off the pipes relying on their position and 
 * applies the movement 
 */
let logicMotionPipes = (pipe1: HTMLImageElement , pipe2: HTMLImageElement) => {
    
    if(parseFloat(pipe1.style.right) > 100 || parseFloat(pipe1.style.right) < 0){
        if (parseFloat(pipe1.style.right) > 100) {
            pipe1.remove()
            pipe2.remove()
            return
        } else {
            nextMovement(pipe1, pipe2);
            }
    } else {
        nextMovement(pipe1, pipe2);
    }
}


/**
 * this fn create a element in the dom w/ the sizes storage in the pipe object
 */
let createPipes = (pipeObj : PipeInt) => {
    let pipe1 = document.createElement("img")
    let pipe2= document.createElement("img")

    pipe1.src = "../../images/pipe.png"
    pipe2.src = "../../images/pipe.png"
    
    pipe1.style.height = `${pipeObj.heightPipe1}%`
    pipe2.style.height = `${pipeObj.heightPipe2}%`

    pipe1.style.right = "-20%"
    pipe2.style.right = "-20%"
    
    pipe1.className = "pipe-1-down-direction"
    pipe2.className = "pipe-2-up-direction"
    
    gameContainer_div.append(pipe1)
    gameContainer_div.append(pipe2)

    logicMotionPipes(pipe1, pipe2)
}

/**
 * this function is called every X sec and create a class where there are the random height 
 * of the pipe and the random hole where the flappy will have to pass
 */
let mainGeneratorCoupleOfPipes = () => {
    let pipe = new Pipe();
    pipe.generateHeightPipesBasedOnHole(pipe);
    createPipes(pipe)
}


export default mainGeneratorCoupleOfPipes;