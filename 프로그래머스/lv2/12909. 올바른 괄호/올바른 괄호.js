function solution(s){
    let answer = true;
        let arr = [];
        if(s[0] == ')') {
        answer = false;
        return answer;
      }
    for(let i=0; i<s.length; i++){
        if(s[i] == '('){
        arr.push(s[i])
      }else{
        arr.pop();
      }
    }
    answer = arr.length > 0 ? false : true;
    return answer;
}