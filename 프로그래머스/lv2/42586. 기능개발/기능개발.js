function solution(progresses, speeds) {
    const answer = [];
    
    while (progresses.length > 0) {
        progresses = progresses.map((e, i) => e + speeds[i]);
        let count = 0; 
        
        while (progresses[0] >= 100) {
            progresses.shift();
            speeds.shift();
            count++;
        }
        
        if (count > 0) {
            answer.push(count);
            count = 0;
        }
    }
    
    return answer;
}