const bird_div = document.getElementById("flappy-bird") as HTMLDivElement


class MotionBird {
    static counterDec = 1;
    static currentPosition : number;
    static handlerArray : ReturnType<typeof setTimeout>[] = []

    static execMotionDown = () => {
        let handler = setTimeout(() => {
            this.currentPosition = parseInt(bird_div.style.top)
            bird_div.style.top = `${this.currentPosition+(this.counterDec++)}%`
            this.handlerArray.push(handler)
            console.log(this.handlerArray);
            this.logicDownMotion()
        },500)
    }
    
    static logicDownMotion = () =>{
        this.currentPosition = parseInt(bird_div.style.top)
        if (this.currentPosition < 100) {
            this.execMotionDown()
        } else {
            return
        }
    }
    
    static moveUp = () =>  {
        console.log(this.handlerArray);
        for (const timer of this.handlerArray) {
            clearTimeout(timer)
        }
        console.log(this.handlerArray);
        
        
        this.counterDec = 1;
        if (bird_div.hasAttribute("style")) {
            this.currentPosition = parseInt(bird_div.style.top)
            bird_div.style.top = `${this.currentPosition-5}%`
        } else {
            bird_div.style.top = "50%"
            this.currentPosition = parseInt(bird_div.style.top)
            bird_div.style.top = `${this.currentPosition-5}%`
        }
        setTimeout(this.logicDownMotion, 500)
    }
}

export default MotionBird;