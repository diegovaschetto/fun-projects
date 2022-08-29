import '../../styles/main.css';
import '../../images/pipe.png';
import mainPipe from "./pipe";
import Bird from "./bird";
setInterval(mainPipe, 3000);
window.addEventListener("keypress", () => {
    Bird.moveUp();
});
