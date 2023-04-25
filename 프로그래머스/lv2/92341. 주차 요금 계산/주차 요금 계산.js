function solution(fees, records) {
    const obj = {};
    const answer = [];
    
    records = records.map(e => e = e.split(' '));
    records = records.map(e => [e[0].split(':').reduce((a, b) => (Number(a) * 60) + Number(b)), e[1], e[2]]);
    
    for (let i = 0; i < records.length; i++) {
        const el = records[i];
        
        if (!(el[1] in obj)) {
            obj[el[1]] = el[0];
            continue;
        }
        
        el[2] === 'IN' ? obj[el[1]] += el[0] : obj[el[1]] -= el[0];
    }
    
    for (let p in obj) {
        if (obj[p] >= 0) {
            obj[p] -= 1439;
        };
        
        obj[p] = -obj[p];
        
        obj[p] = fees[1] + (obj[p] - fees[0] > 0 ? (Math.ceil((obj[p] - fees[0]) / fees[2])) * fees[3] : 0);
    }
    
    const keys = Object.keys(obj);
    keys.sort();
    
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const value = obj[key];
      answer.push(value);
    }
    
    return answer;
}