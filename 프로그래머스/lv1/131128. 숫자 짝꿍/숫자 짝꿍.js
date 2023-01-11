function solution(X, Y) {
    const commonNums = [];
    const objX = {};
    const objY = {};

    for(const el of X) {
        objX[el] = (objX[el] || 0) + 1
    }

    for (const el of Y) {
        if (objX[el]) {
            commonNums.push(el);
            objX[el]--;
        }
    }

    commonNums.sort((a, b) => b - a);

    if (commonNums.length === 0) return "-1";
    if (commonNums[0] === "0") return "0";
    return commonNums.reduce((acc, cur) => acc + cur, "");
}