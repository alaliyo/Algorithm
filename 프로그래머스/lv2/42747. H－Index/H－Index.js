function solution(citations) {
    return citations.sort((a, b) => b - a).filter((e, i) => e >= i+1).length;
}