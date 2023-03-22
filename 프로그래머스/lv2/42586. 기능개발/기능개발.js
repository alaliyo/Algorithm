function solution(progresses, speeds) {
    const answer = [];
    progresses.reverse();
    speeds.reverse();
    
    while (progresses.length > 0) {
        progresses = progresses.map((e, i) => e + speeds[i]);
        let count = 0; 
        
        while (progresses[progresses.length - 1] >= 100) {
            progresses.pop();
            speeds.pop();
            count++;
        }
        
        if (count > 0) {
            answer.push(count);
            count = 0;
        }
    }
    
    return answer;
}