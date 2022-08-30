const bird_div = document.getElementById("flappy-bird") as HTMLDivElement

interface Bird  {
    counterDec : number;
    currentPosition : number;
    handler : ReturnType<typeof setInterval>;
    moveDown(): void
    moveUp(): void
}


let decoratorClass = <T>() => {
    return <U extends T>(constructor: U) => {constructor};
}


@decoratorClass<Bird>()
class MotionBird {
    static counterDec:number;
    static currentPosition : number;
    static handler: ReturnType<typeof setInterval>;
    
    static moveDown = () =>{
        MotionBird.currentPosition = parseInt(bird_div.style.top)
        if (MotionBird.currentPosition < 100) {
            bird_div.style.top = `${MotionBird.currentPosition+(MotionBird.counterDec++)}%`
        } else {
            clearInterval(MotionBird.handler)
        }
    }
    
    static moveUp = () =>  {
        clearInterval(MotionBird.handler)
        MotionBird.counterDec = 1;
        if (bird_div.hasAttribute("style")) {
            MotionBird.currentPosition = parseInt(bird_div.style.top)
            bird_div.style.top = `${MotionBird.currentPosition-5}%`
        } else {
            bird_div.style.top = "50%"
            MotionBird.currentPosition = parseInt(bird_div.style.top)
            bird_div.style.top = `${MotionBird.currentPosition-5}%`
        }
        MotionBird.handler = (setInterval(MotionBird.moveDown, 200))
    }
}


export default MotionBird;