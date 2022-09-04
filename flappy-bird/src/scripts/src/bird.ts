import { bird_div, gravity, bounce , Handler } from "./const";

interface Bird {
    counterDec: number;
    currentPosition: number;
    handler: Handler;
    moveDown(): void;
    moveUp(): void;
}

let decoratorClass = <T>() => {
    return <U extends T>(constructor: U) => {
        constructor;
    };
};

@decoratorClass<Bird>()
class MotionBird {
    static counterDec: number;
    static currentPosition: number;
    static handler: Handler;

    static moveDown = () => {
        MotionBird.currentPosition = parseFloat(bird_div.style.top);
        bird_div.style.top = `${
            MotionBird.currentPosition + (MotionBird.counterDec += gravity / 10)
        }%`;
    };

    static moveUp = () => {
        clearInterval(MotionBird.handler);
        MotionBird.counterDec = gravity / 10;
        MotionBird.currentPosition = parseFloat(bird_div.style.top);
        bird_div.style.top = `${MotionBird.currentPosition - bounce}%`;
        MotionBird.handler = setInterval(MotionBird.moveDown, 50);
    };
}

export default MotionBird;
