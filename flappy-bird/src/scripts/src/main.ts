import "../../styles/main.css";
import "../../images/pipe.png";
import mainPipe from "./pipe";
import Bird from "./bird";
import { score } from "./score";

const startButton = document.getElementById("start-button") as HTMLButtonElement;
const startBanner = document.getElementById("banner") as HTMLDivElement;
const gameContainer_div = document.getElementById("container-game") as HTMLDivElement;
const bird_div = document.getElementById("flappy-bird") as HTMLDivElement

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
