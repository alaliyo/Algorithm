function solution(elements) {
    const answer = new Set();
    const LEN = elements.length;

    elements = elements.concat(elements);

    for (let len = 1; len <= LEN; len++) {
        for (let index = 0; index < LEN; index++) {
            const total = elements.slice(index, index + len).reduce((prev, curr) => prev + curr, 0);
            answer.add(total);
        }
    }

    return answer.size;
}