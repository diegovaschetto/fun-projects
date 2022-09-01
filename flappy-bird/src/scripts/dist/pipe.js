var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Pipe_1;
import gameOver from "./game-over";
const gameContainer_div = document.getElementById("container-game");
/**
 * useful to generate a random number among min and max
 * @param min
 * @param max
 */
let randomNumber = (min, max) => {
    return Math.round(Math.random() * (min - max) + max);
};
let decorator = () => {
    return (constructor) => { constructor; };
};
let Pipe = Pipe_1 = class Pipe {
    constructor() {
        /**
         * this fn create a element in the dom w/ the sizes storage in the pipe object
         */
        this.createPipes = (pipeObj) => {
            this.generateHeightPipesBasedOnHole(pipeObj);
            Pipe_1.stopGame = true;
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
        this.nextMovement = (pipe1, pipe2) => {
            let pipe1Position = parseFloat(pipe1.style.right);
            let pipe2Position = parseFloat(pipe2.style.right);
            setTimeout(() => {
                if (!Pipe_1.stopGame)
                    return;
                pipe1.style.right = `${pipe1Position + 0.5}%`;
                pipe2.style.right = `${pipe2Position + 0.5}%`;
                Pipe_1.stopGame = gameOver(pipe1, pipe2, Pipe_1.pipesInterval);
                if (Pipe_1.stopGame)
                    this.logicMotionPipes(pipe1, pipe2);
            }, 25);
        };
        /**
         * fn that display on or off the pipes relying on their position and
         * applies the movement
         */
        this.logicMotionPipes = (pipe1, pipe2) => {
            if (parseFloat(pipe1.style.right) > 100) {
                pipe1.remove();
                pipe2.remove();
            }
            else {
                this.nextMovement(pipe1, pipe2);
            }
        };
        this.hole = randomNumber(20, 30);
    }
    generateHeightPipesBasedOnHole(pipe) {
        let remainSpace = 100 - this.hole;
        pipe.heightPipe1 = randomNumber(0, remainSpace);
        let maxGap = remainSpace - 10;
        while (pipe.heightPipe1 <= 10 || pipe.heightPipe1 >= maxGap) {
            pipe.heightPipe1 = randomNumber(0, remainSpace);
        }
        pipe.heightPipe2 = remainSpace - pipe.heightPipe1;
    }
};
Pipe.stopGame = true;
Pipe = Pipe_1 = __decorate([
    decorator()
], Pipe);
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
