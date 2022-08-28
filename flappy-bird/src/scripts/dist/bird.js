var _a;
const bird_div = document.getElementById("flappy-bird");
class MotionBird {
}
_a = MotionBird;
MotionBird.moveDown = () => {
    _a.currentPosition = parseInt(bird_div.style.top);
    if (_a.currentPosition < 100) {
        bird_div.style.top = `${_a.currentPosition + (_a.counterDec++)}%`;
    }
    else {
        clearInterval(_a.handler);
    }
};
MotionBird.moveUp = () => {
    clearInterval(_a.handler);
    _a.counterDec = 1;
    if (bird_div.hasAttribute("style") && _a.currentPosition > 0) {
        _a.currentPosition = parseInt(bird_div.style.top);
        bird_div.style.top = `${_a.currentPosition - 5}%`;
    }
    else {
        bird_div.style.top = "50%";
        _a.currentPosition = parseInt(bird_div.style.top);
        bird_div.style.top = `${_a.currentPosition - 5}%`;
    }
    _a.handler = (setInterval(_a.moveDown, 200));
};
/* interface Bird {
    counter:number;
    currentPosition? : number;
    handler?: ReturnType<typeof setInterval>;
}
 */
export default MotionBird;
