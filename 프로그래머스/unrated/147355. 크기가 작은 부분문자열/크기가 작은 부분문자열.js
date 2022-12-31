function solution(t, p) {
    let arr = [];
    
    for (let i = 0; i <= t.length - p.length; i++) {
        arr.push(t.slice(i, i+p.length));
        
    }
    
    return arr.filter(e => e <= p).length;
}