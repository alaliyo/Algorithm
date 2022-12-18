function solution(arr1, arr2) {
    const answer = [];
    arr1.forEach((arr, i) => answer.push(arr.map((v, j) => v + arr2[i][j])));
    return answer;
}