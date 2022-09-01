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
        MotionBird.currentPosition = parseFloat(bird_div.style.top)
        bird_div.style.top = `${MotionBird.currentPosition+(MotionBird.counterDec+=0.1)}%`
    }
    
    static moveUp = () =>  {
        clearInterval(MotionBird.handler)
        MotionBird.counterDec = 0.1;
        MotionBird.currentPosition = parseFloat(bird_div.style.top)
        bird_div.style.top = `${MotionBird.currentPosition-5}%`
        MotionBird.handler = (setInterval(MotionBird.moveDown, 50))
    }
}


export default MotionBird;