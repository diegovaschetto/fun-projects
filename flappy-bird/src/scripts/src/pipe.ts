import gameOver from "./game-over";
const gameContainer_div = document.getElementById("container-game") as HTMLDivElement;

/**
 * useful to generate a random number among min and max
 * @param min
 * @param max
 */
let randomNumber = (min: number, max: number): number => {
    return Math.round(Math.random() * (min - max) + max);
};

interface PipeIstance {
    heightPipe1?: number;
    heightPipe2?: number;
    hole: number;
    generateHeightPipesBasedOnHole(pipe: PipeIstance): void;
    nextMovement (pipe1: HTMLImageElement, pipe2: HTMLImageElement): void
    createPipes(pipeObj: PipeIstance):void
    logicMotionPipes (pipe1: HTMLImageElement, pipe2: HTMLImageElement):void
}

interface PipeIntGlobal {
    stopGame: boolean
    pipesInterval: ReturnType<typeof setInterval>
    new() : PipeIstance
}

let decorator = <T>() =>{
    return <U extends T>(constructor: U) => {constructor}
}

@decorator<PipeIntGlobal>()
class Pipe {
    hole: number;
    static stopGame: boolean = true;
    static pipesInterval: ReturnType<typeof setInterval>;

    constructor() {
        this.hole = randomNumber(20, 30);
    }

    generateHeightPipesBasedOnHole(pipe: PipeIstance) {
        let remainSpace = 100 - this.hole;
        pipe.heightPipe1 = randomNumber(0, remainSpace);
        let maxGap = remainSpace - 10;

        while (pipe.heightPipe1 <= 10 || pipe.heightPipe1 >= maxGap) {
            pipe.heightPipe1 = randomNumber(0, remainSpace);
        }
        pipe.heightPipe2 = remainSpace - pipe.heightPipe1;
    }

    /**
     * this fn create a element in the dom w/ the sizes storage in the pipe object
     */
    createPipes = (pipeObj: PipeIstance) => {
        this.generateHeightPipesBasedOnHole(pipeObj);
        Pipe.stopGame = true;
        let pipe1 = document.createElement("img");
        let pipe2 = document.createElement("img");

        pipe1.src = "../../images/pipe.png";
        pipe2.src = "../../images/pipe.png";

        pipe1.style.height = `${pipeObj.heightPipe1}%`;
        pipe2.style.height = `${pipeObj.heightPipe2}%`;

        pipe1.style.right = "-20%";
        pipe2.style.right = "-20%";

        pipe1.className = "pipe-1-down-direction";
        pipe2.className = "pipe-2-up-direction";

        gameContainer_div.append(pipe1);
        gameContainer_div.append(pipe2);

        this.logicMotionPipes(pipe1, pipe2);
    };

    nextMovement = (pipe1: HTMLImageElement, pipe2: HTMLImageElement) => {
        let pipe1Position = parseFloat(pipe1.style.right);
        let pipe2Position = parseFloat(pipe2.style.right);
        setTimeout(() => {
            if (!Pipe.stopGame) return;
            pipe1.style.right = `${pipe1Position + 0.5}%`;
            pipe2.style.right = `${pipe2Position + 0.5}%`;
            Pipe.stopGame = gameOver(pipe1, pipe2, Pipe.pipesInterval);
            if (Pipe.stopGame) this.logicMotionPipes(pipe1, pipe2);
        }, 25);
    };

    /**
     * fn that display on or off the pipes relying on their position and
     * applies the movement
     */
    logicMotionPipes = (pipe1: HTMLImageElement, pipe2: HTMLImageElement) => {
        if (parseFloat(pipe1.style.right) > 100) {
            pipe1.remove();
            pipe2.remove();
        } else {
            this.nextMovement(pipe1, pipe2);
        }
    };
}

/**
 * this function is called every X sec and create a class where there are the random height
 * of the pipe and the random hole where the flappy will have to pass
 */
let mainGeneratorCoupleOfPipes = () => {
    Pipe.pipesInterval = setInterval(() => {
        let pipe = new Pipe();
        pipe.createPipes(pipe);
    }, 2000);
};

export default mainGeneratorCoupleOfPipes;
