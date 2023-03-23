function solution(elements) {
    let set = new Set();
    const eTwice = elements.concat(elements);

    for (let i = 0; i < elements.length; i++) {
        for (let j = 0; j < elements.length; j++) {
            set.add([...eTwice].splice(i, j+1).reduce((a, b) => a + b));
        }
    }

    return set.size;
}