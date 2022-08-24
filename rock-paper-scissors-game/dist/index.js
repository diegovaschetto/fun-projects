"use strict";
const PSRArray = ["rock", "paper", "scissor"];
const rockButton = document.getElementById("rock-button");
const paperButton = document.getElementById("paper-button");
const scissorButton = document.getElementById("scissor-button");
let randomComp = (min, max) => {
    return Math.round((Math.random() * (min - max) + max));
};
let printResult = (round, oldUserPoint) => {
    let resultContainer = document.createElement("div");
    let explanationPhraseOfRound = document.createElement("p");
    let expPhrase = explanationPhraseOfRound;
    (Points.getUserPoints() > oldUserPoint) ? expPhrase.textContent = `You Win, ${round.user} beats ${round.comp} ` :
        expPhrase.textContent = `You Lost, ${round.user} loses ${round.comp}`;
    resultContainer.appendChild(expPhrase);
    let result = document.createElement("p");
    result.textContent = `${Points.getUserPoints()} - ${Points.getCompPoints()}`;
    resultContainer.appendChild(result);
    document.body.appendChild(resultContainer);
};
rockButton.onclick = () => {
    let comp = PSRArray[randomComp(0, 2)];
    let round = new Rock(comp);
    let userPoints = Points.getUserPoints();
    assignPointRound(round.whoWinRound());
    setTimeout(printResult, 1000, round, userPoints);
};
paperButton.onclick = () => {
    let comp = PSRArray[randomComp(0, 2)];
    let round = new Paper(comp);
    let userPoints = Points.getUserPoints();
    assignPointRound(round.whoWinRound());
    setTimeout(printResult, 1000, round, userPoints);
};
scissorButton.onclick = () => {
    let comp = PSRArray[randomComp(0, 2)];
    let round = new Scissor(comp);
    let userPoints = Points.getUserPoints();
    assignPointRound(round.whoWinRound());
    setTimeout(printResult, 1000, round, userPoints);
};
let assignPointRound = (winRound) => {
    switch (winRound) {
        case 1:
            Points.updateUserPoints();
            break;
        case -1:
            Points.updateCompPoints();
            break;
        default:
            break;
    }
};
class Points {
    static updateUserPoints() {
        this.userPoints++;
    }
    static updateCompPoints() {
        this.compPoints++;
    }
    static getUserPoints() { return this.userPoints; }
    static getCompPoints() { return this.compPoints; }
}
Points.userPoints = 0;
Points.compPoints = 0;
class Paper {
    constructor(comp) {
        this.user = "paper";
        this.comp = comp;
    }
    whoWinRound() {
        if (this.comp === "scissor")
            return -1;
        else if (this.comp === "rock")
            return 1;
        else
            return 0;
    }
}
class Scissor {
    constructor(comp) {
        this.user = "scissor";
        this.comp = comp;
    }
    whoWinRound() {
        if (this.comp === "rock")
            return -1;
        else if (this.comp === "paper")
            return 1;
        else
            return 0;
    }
}
class Rock {
    constructor(comp) {
        this.user = "rock";
        this.comp = comp;
    }
    whoWinRound() {
        if (this.comp === "paper")
            return -1;
        else if (this.comp === "scissor")
            return 1;
        else
            return 0;
    }
}
