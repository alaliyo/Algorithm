function solution(babbling) {
    let count = 0;
    for (let e of babbling) {
        if (e.replace(/ayaaya|yeye|woowoo|mama/, '1').replace((/[^1]/g), '') === '1') continue;
        
        if (e.replace(/aya|ye|woo|ma/g, '').length === 0) count++;
    }
    
    return count;
}