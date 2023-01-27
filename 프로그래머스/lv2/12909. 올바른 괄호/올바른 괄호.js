function solution(s){
    var answer = true;
    let count = 0;
    if(s[0] == ")"){return false}
    for(let i = 0; i < s.length; i++){
        count += s[i]=="("? -1 : 1 ;
        if(count >0)return false;
    }

    return count ==0?true:false;
}