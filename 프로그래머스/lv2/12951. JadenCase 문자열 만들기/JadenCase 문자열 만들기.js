function solution(s) {
    s = s.split(' ');
    
    for (let i = 0; i < s.length; i++) {
        let e = s[i];
        if (e === '') continue;
        s[i] = e.charAt(0).toUpperCase() + e.slice(1).toLowerCase();
    }
    return s.join(' ');
}