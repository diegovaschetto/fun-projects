const result_span = document.getElementById("update-result");
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
    }
};
export { score };
