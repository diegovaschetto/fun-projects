var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import gameOver from "./game-over";
import { gameContainer_div, timerOfPipes } from "./const";
/**
 * useful to generate a random number among min and max
 * @param min
 * @param max
 */
let randomNumber = (min, max) => {
    return Math.round(Math.random() * (min - max) + max);
};
let decorator = () => {
    return (constructor) => {
        constructor;
    };
};
class Pipe {
    constructor() {
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
}
Pipe.stopGame = true;
let logicPipe = class logicPipe extends Pipe {
    constructor() {
        super(...arguments);
        this.nextMovement = (pipe1, pipe2) => {
            let pipe1Position = parseFloat(pipe1.style.right);
            let pipe2Position = parseFloat(pipe2.style.right);
            setTimeout(() => {
                if (!Pipe.stopGame)
                    return;
                pipe1.style.right = `${pipe1Position + 0.5}%`;
                pipe2.style.right = `${pipe2Position + 0.5}%`;
                Pipe.stopGame = gameOver(pipe1, pipe2, Pipe.pipesInterval);
                if (Pipe.stopGame)
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
        /**
         * this fn create a element in the dom w/ the sizes storage in the pipe object
         */
        this.createPipes = (pipeObj) => {
            super.generateHeightPipesBasedOnHole(pipeObj);
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
    }
};
logicPipe = __decorate([
    decorator()
], logicPipe);
/**
 * this function is called every X sec and create a class where there are the random height
 * of the pipe and the random hole where the flappy will have to pass
 */
let mainGeneratorCoupleOfPipes = () => {
    setTimeout(() => {
        let pipe = new logicPipe();
        pipe.createPipes(pipe);
        Pipe.pipesInterval = setInterval(() => {
            let pipe = new logicPipe();
            pipe.createPipes(pipe);
        }, timerOfPipes);
    }, 0);
};
export default mainGeneratorCoupleOfPipes;
