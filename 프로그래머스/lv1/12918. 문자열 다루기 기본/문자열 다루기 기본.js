function solution(s) {
    if (s.length === 4 || s.length === 6) {
        return !/[a-z]|[A-Z]/.test(s);
    }
    return false;
}