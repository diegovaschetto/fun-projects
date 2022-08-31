const result_span = document.getElementById("update-result");
const score = {
    point: 0
};
let addPoint = () => {
    score.point++;
    result_span.textContent = `${score.point}`;
};
export { addPoint };
