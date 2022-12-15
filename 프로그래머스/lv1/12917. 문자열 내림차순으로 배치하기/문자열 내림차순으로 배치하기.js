function solution(s) {
    return s.split('').sort((a, b) => b.codePointAt(0) - a.codePointAt(0) ).join('');
}