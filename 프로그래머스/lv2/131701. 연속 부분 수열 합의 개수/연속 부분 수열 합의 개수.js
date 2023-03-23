function solution(elements) {
    let arr = [];
    const eTwice = [...elements, ...elements]
    
    for (let i = 0; i < elements.length; i++) {
        for (let j = 0; j < elements.length; j++) {
            arr.push([...eTwice].splice(i, j+1).reduce((a, b) => a + b));
        }
    }
    
    return [...new Set(arr)].length;
}