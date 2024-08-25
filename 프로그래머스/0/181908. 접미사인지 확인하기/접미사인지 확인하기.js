function solution(my_string, is_suffix) {
    const newSt = my_string.split("").reverse().join("");
    const newSuffix = is_suffix.split("").reverse().join("");
    return newSt.indexOf(newSuffix) === 0 ? 1 : 0;
}