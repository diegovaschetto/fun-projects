var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var MotionBird_1;
import { bird_div } from "./const";
let decoratorClass = () => {
    return (constructor) => { constructor; };
};
let MotionBird = MotionBird_1 = class MotionBird {
};
MotionBird.moveDown = () => {
    MotionBird_1.currentPosition = parseFloat(bird_div.style.top);
    bird_div.style.top = `${MotionBird_1.currentPosition + (MotionBird_1.counterDec += 0.1)}%`;
};
MotionBird.moveUp = () => {
    clearInterval(MotionBird_1.handler);
    MotionBird_1.counterDec = 0.1;
    MotionBird_1.currentPosition = parseFloat(bird_div.style.top);
    bird_div.style.top = `${MotionBird_1.currentPosition - 5}%`;
    MotionBird_1.handler = (setInterval(MotionBird_1.moveDown, 50));
};
MotionBird = MotionBird_1 = __decorate([
    decoratorClass()
], MotionBird);
export default MotionBird;
