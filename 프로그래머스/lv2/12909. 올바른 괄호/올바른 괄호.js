function solution(s){
    s = s.replaceAll('()', "");
    if (s.length === 0) return true;
    if (s[0] === ')' || s[s.length-1] === '(') return false;
    return (s.match(/\(/g).length === s.match(/\)/g).length) ? true : false;
}