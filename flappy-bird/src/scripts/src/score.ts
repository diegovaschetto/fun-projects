const result_span = document.getElementById("update-result") as HTMLSpanElement

interface Score<T> {
    point : T
}

const score: Score<number> = {
    point: 0
}

let addPoint = () => {
    score.point++
    result_span.textContent = `${score.point}`
}

export {addPoint}