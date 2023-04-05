function solution(k, dungeons) {
    let answer = 0;
    const len = dungeons.length;
    
    function DFS(i, num, count) {
        if (i === len) { 
            count > answer ? answer = count : null;
            return;
        }
        
        for (let j = i; j < len; j++) {
            [dungeons[i], dungeons[j]] = [dungeons[j], dungeons[i]];
            if (num >= dungeons[i][0]) {
                DFS(i + 1, num - dungeons[i][1], count + 1);
            }
            [dungeons[i], dungeons[j]] = [dungeons[j], dungeons[i]];
        }
        DFS(i + 1, num, count)
    }
    
    DFS(0, k, 0);

    return answer;
}