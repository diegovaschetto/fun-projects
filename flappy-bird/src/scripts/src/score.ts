const result_span = document.getElementById("update-result") as HTMLSpanElement

interface Score<T> {
    point : T
    addPoint(ifReset:boolean):void
}

const score: Score<number> = {
    point: 0,
    addPoint: function (ifReset: boolean) {
        if (ifReset){
            this.point = 0
            result_span.textContent = `${this.point}`
        } else{
            this.point++
            result_span.textContent = `${this.point}`
        }
    }
}

export {score}