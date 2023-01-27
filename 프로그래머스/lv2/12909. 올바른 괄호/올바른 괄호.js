function solution(s){
    if (s[0] === ')' || s[s.length-1] === '(' || s < 2 || s.length % 2 !==0) return false;
    if (s.match(/\(/g).length !== s.match(/\)/g).length) return false;
    s = s.replaceAll('()', "")
    if (s.length === 0) return true;
    if (s[0] === ')' || s[s.length-1] === '(') return false;
    if (s.match(/\(/g).length === s.match(/\)/g).length) return true;
    return false;
}