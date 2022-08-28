var _a;
const bird_div = document.getElementById("flappy-bird");
class MotionBird {
}
_a = MotionBird;
MotionBird.counterDec = 1;
MotionBird.handlerArray = [];
MotionBird.execMotionDown = () => {
    let handler = setTimeout(() => {
        _a.currentPosition = parseInt(bird_div.style.top);
        bird_div.style.top = `${_a.currentPosition + (_a.counterDec++)}%`;
        _a.handlerArray.push(handler);
        console.log(_a.handlerArray);
        _a.logicDownMotion();
    }, 500);
};
MotionBird.logicDownMotion = () => {
    _a.currentPosition = parseInt(bird_div.style.top);
    if (_a.currentPosition < 100) {
        _a.execMotionDown();
    }
    else {
        return;
    }
};
MotionBird.moveUp = () => {
    console.log(_a.handlerArray);
    for (const timer of _a.handlerArray) {
        clearTimeout(timer);
    }
    console.log(_a.handlerArray);
    _a.counterDec = 1;
    if (bird_div.hasAttribute("style")) {
        _a.currentPosition = parseInt(bird_div.style.top);
        bird_div.style.top = `${_a.currentPosition - 5}%`;
    }
    else {
        bird_div.style.top = "50%";
        _a.currentPosition = parseInt(bird_div.style.top);
        bird_div.style.top = `${_a.currentPosition - 5}%`;
    }
    setTimeout(_a.logicDownMotion, 500);
};
export default MotionBird;
