function solution(ingredient) {
    let count = 0;
    let arr = [];

    for (let i = 0; i < ingredient.length; ++i) {
        arr.push(ingredient[i]);

        if (arr.length < 4) continue;

        if (arr[arr.length - 4] === 1
            && arr[arr.length - 3] === 2
            && arr[arr.length - 2] === 3
            && arr[arr.length - 1] === 1) {
            for (let j = 0; j < 4; ++j) {
                arr.pop();
            }
            count++;   
        }
    }

    return count;
}