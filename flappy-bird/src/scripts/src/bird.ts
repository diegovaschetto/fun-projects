const bird_div = document.getElementById("flappy-bird") as HTMLDivElement


class MotionBird {
    static counterDec:number;
    static currentPosition : number;
    static handler: ReturnType<typeof setInterval>;
    
    static moveDown = () =>{
        this.currentPosition = parseInt(bird_div.style.top)
        if (this.currentPosition < 100) {
            bird_div.style.top = `${this.currentPosition+(this.counterDec++)}%`
        } else {
            clearInterval(this.handler)
        }
    }
    
    static moveUp = () =>  {
        clearInterval(this.handler)
        this.counterDec = 1;
        if (bird_div.hasAttribute("style")) {
            this.currentPosition = parseInt(bird_div.style.top)
            bird_div.style.top = `${this.currentPosition-5}%`
        } else {
            bird_div.style.top = "50%"
            this.currentPosition = parseInt(bird_div.style.top)
            bird_div.style.top = `${this.currentPosition-5}%`
        }
        this.handler = (setInterval(this.moveDown, 200))
    }
}

/* interface Bird {
    counter:number;
    currentPosition? : number;
    handler?: ReturnType<typeof setInterval>;
}
 */

export default MotionBird;