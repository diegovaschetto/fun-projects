const result_span = document.getElementById("update-result");
const startButton = document.getElementById("start-button");
const startBanner = document.getElementById("banner");
const gameContainer_div = document.getElementById("container-game");
const bird_div = document.getElementById("flappy-bird");
const levelOfDifficulty_select = document.getElementById("difficulty");
let timerOfPipes;
let gravity;
let bounce;
let switchLevel = () => {
    var choiceOfLevel = levelOfDifficulty_select.options[levelOfDifficulty_select.selectedIndex].value;
    switch (parseInt(choiceOfLevel)) {
        case 1:
            timerOfPipes = 3000;
            gravity = 1;
            bounce = 5;
            break;
        case 2:
            timerOfPipes = 2000;
            gravity = 2;
            bounce = 8;
            break;
        case 3:
            timerOfPipes = 1500;
            gravity = 3;
            bounce = 10;
            break;
        default:
            break;
    }
};
export { result_span, startBanner, startButton, gameContainer_div, bird_div, levelOfDifficulty_select, timerOfPipes, switchLevel, gravity, bounce, };
