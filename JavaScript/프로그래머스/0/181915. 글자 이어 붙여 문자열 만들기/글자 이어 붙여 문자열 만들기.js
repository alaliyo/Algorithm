function solution(my_string, index_list) {
    var answer = index_list.map(e => my_string[e]).join("");
    return answer;
}