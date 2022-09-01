import "../../styles/main.css";
import "../../images/pipe.png";
import mainPipe from "./pipe";
import Bird from "./bird";
import { score } from "./score";
const startButton = document.getElementById("start-button");
const startBanner = document.getElementById("banner");
const gameContainer_div = document.getElementById("container-game");
const bird_div = document.getElementById("flappy-bird");
export let startGame = () => Bird.moveUp();
startButton.onclick = () => {
    let pipesToWipe = gameContainer_div.querySelectorAll("img");
    pipesToWipe.forEach((pipe) => {
        pipe.remove();
    });
    startBanner.classList.add("hidden");
    bird_div.style.top = "50%";
    window.addEventListener("keyup", startGame);
    score.addPoint(true);
    mainPipe();
};
