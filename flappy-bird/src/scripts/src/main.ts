import '../../styles/main.css'
import '../../images/pipe.png'
import mainPipe from "./pipe"
import Bird from "./bird"


export let startGame = () => Bird.moveUp()

let pipesMotion = setInterval(mainPipe,2000)
window.addEventListener("keyup", startGame)

export default pipesMotion
