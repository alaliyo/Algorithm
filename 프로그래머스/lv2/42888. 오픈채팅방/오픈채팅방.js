function solution(record) {
    const useObj = {};
    const answer = [];
    const newRecord = record.map(e => e.split(' '));
    
    for (let i = 0; i < newRecord.length; i++) {
        const el = newRecord[i];
        if (el[0] === 'Change' || el[0] === 'Enter') {
            useObj[el[1]] = el[2];
        }
    }
    
    for (let i = 0; i < newRecord.length; i++) {
        const el = newRecord[i];
        if (el[0] === 'Enter') {
            answer.push(useObj[el[1]] + '님이 들어왔습니다.');
        } else if (el[0] === 'Leave') {
            answer.push(useObj[el[1]] + '님이 나갔습니다.');
        }
    }
    
    return answer;
}