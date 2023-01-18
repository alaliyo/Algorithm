function solution(survey, choices) {
    let str = '';
    let obj = {
        R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0
    }
    
    for (let i = 0; i < survey.length; i++) {
        const e = survey[i];
        const num = choices[i];
        
        if (num >= 5) obj[e[1]] += (num - 4);
        if (num <= 3) obj[e[0]] += (4 - num);
    }
    
    obj['R'] >= obj['T'] ? str =  'R' : str += 'T';
    obj['C'] >= obj['F'] ? str += 'C' : str += 'F';
    obj['J'] >= obj['M'] ? str += 'J' : str += 'M';
    obj['A'] >= obj['N'] ? str += 'A' : str += 'N';
    
    return str;
}