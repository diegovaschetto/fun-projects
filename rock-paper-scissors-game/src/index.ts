const PSRArray: [string, string, string] = ["rock", "paper", "scissor"];

const rockButton = document.getElementById("rock-button") as HTMLButtonElement;
const paperButton = document.getElementById("paper-button") as HTMLButtonElement;
const scissorButton = document.getElementById("scissor-button") as HTMLButtonElement;

let randomComp = (min: number, max: number): number => {
    return Math.round(Math.random() * (min - max) + max);
};

interface Result {
    (round: PSRScheme, oldUserPoint: number): void;
}

let printResult: Result = (round, oldUserPoint) => {
    let resultContainer = document.createElement("div");
    let explanationPhraseOfRound = document.createElement("p");
    let expPhrase = explanationPhraseOfRound;
    Points.getUserPoints() > oldUserPoint
        ? (expPhrase.textContent = `You Win, ${round.user} beats ${round.comp} `)
        : (expPhrase.textContent = `You Lost, ${round.user} loses ${round.comp}`);
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

let assignPointRound = (winRound: number): void => {
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

interface PointsInt {
    userPoints: number;
    compPoints: number;
}

class Points {
    private static userPoints: number = 0;
    private static compPoints: number = 0;

    static updateUserPoints() {
        this.userPoints++;
    }

    static updateCompPoints() {
        this.compPoints++;
    }

    static getUserPoints() {
        return this.userPoints;
    }
    static getCompPoints() {
        return this.compPoints;
    }
}

interface PSRScheme {
    comp: string;
    user: string;
    whoWinRound(): number;
}

class Paper implements PSRScheme {
    comp: string;
    user: string = "paper";

    constructor(comp: string) {
        this.comp = comp;
    }

    whoWinRound(): number {
        if (this.comp === "scissor") return -1;
        else if (this.comp === "rock") return 1;
        else return 0;
    }
}

class Scissor implements PSRScheme {
    comp: string;
    user: string = "scissor";

    constructor(comp: string) {
        this.comp = comp;
    }

    whoWinRound(): number {
        if (this.comp === "rock") return -1;
        else if (this.comp === "paper") return 1;
        else return 0;
    }
}

class Rock implements PSRScheme {
    comp: string;
    user: string = "rock";

    constructor(comp: string) {
        this.comp = comp;
    }

    whoWinRound(): number {
        if (this.comp === "paper") return -1;
        else if (this.comp === "scissor") return 1;
        else return 0;
    }
}

