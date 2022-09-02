import "../../styles/main.css";
import "../../images/pipe.png";
import mainPipe from "./pipe";
import Bird from "./bird";
import { score } from "./score";
import { startButton , startBanner, gameContainer_div , bird_div } from "./const"

export let startGame = () => Bird.moveUp();

startButton.onclick = () => {
    let pipesToWipe = gameContainer_div.querySelectorAll("img") as NodeListOf<HTMLImageElement>;
    pipesToWipe.forEach((pipe) => {
        pipe.remove();
    });
    startBanner.classList.add("hidden");
    bird_div.style.top = "50%"
    window.addEventListener("keyup", startGame);
    score.addPoint(true)
    mainPipe();
};
