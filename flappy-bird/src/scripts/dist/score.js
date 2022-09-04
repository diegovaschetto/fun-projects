import { result_span, startButton, startBanner } from "./const";
const score = {
    point: 0,
    addPoint: function (ifReset) {
        if (ifReset) {
            this.point = 0;
            result_span.textContent = `${this.point}`;
        }
        else {
            this.point++;
            result_span.textContent = `${this.point}`;
        }
    },
    gameOverScore: function () {
        const finalScore_p = document.getElementById("final-score");
        if (finalScore_p !== null)
            startBanner.removeChild(finalScore_p);
        startButton.textContent = "Restart";
        let finalScore = document.createElement("p");
        finalScore.textContent = `Your final score is ${this.point}`;
        finalScore.setAttribute("id", "final-score");
        startBanner.insertBefore(finalScore, startBanner.children[0]);
    }
};
export { score };
