function solution(s, n) {
    let arr = s.split('');
    for (let i = 0; i < s.length; i++) {
        let e = arr[i];
        let char = e.charCodeAt(0);
        if (e === ' ') {
            arr[i] = 32;
        } else if (char >= 97){
            char + n > 122 ? arr[i] = char + n - 26 : arr[i] = char + n;
        } else {
            char + n > 90 ? arr[i] = char + n - 26 : arr[i] = char + n;
        }
    }
    return arr.map(e => e = String.fromCharCode(e)).join('');
}