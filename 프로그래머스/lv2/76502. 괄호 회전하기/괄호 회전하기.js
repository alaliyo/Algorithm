function solution(s) {
    let str = s;
    let conut = 0;
    const len = s
    
    for (let i = 0; i < s.length; i++) {
        str += str[0];
        str = str.substr(1);
        const arr = [];
        
        for (let j = 0; j < s.length; j++) {
            arr.push(str[j]);
            const a = arr[arr.length - 2];
            const b = arr[arr.length - 1];
            
            if (a ==='[' && b === ']') {
                arr.pop();
                arr.pop();
            }

            if (a ==='(' && b === ')') {
                arr.pop();
                arr.pop();
            }

            if (a === '{' && b === '}') {
                arr.pop();
                arr.pop();
            }
        }
        arr.length === 0 && conut++;
    }
    
    return conut;
}