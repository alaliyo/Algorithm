function solution(num_list) {
    const newList = [...num_list];
    const lastNum1 = newList.pop();
    const lastNum2 = newList.pop();
    const lastNumMinus = lastNum1 - lastNum2;
    const num = lastNumMinus > 0 ? lastNumMinus : lastNum1 * 2;
    
    return [...num_list, num];
}