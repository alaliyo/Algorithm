function solution(s) {
    let arr =[0, 0];
    while (Number(s) > 1) {
        arr[1] += s.replaceAll('1', "").length;
        s = s.replaceAll('0', "").length.toString(2);
        arr[0] += 1;
    }
    return arr;
}