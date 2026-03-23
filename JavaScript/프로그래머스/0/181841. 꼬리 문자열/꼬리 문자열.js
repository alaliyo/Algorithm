function solution(str_list, ex) {
    const arr = str_list.map(e => e.includes(ex) ? "" : e);
    return arr.join("");
}