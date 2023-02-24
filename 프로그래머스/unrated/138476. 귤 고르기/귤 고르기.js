function solution(k, tangerine) {
  let count = 0;
  const tDict = {};
  tangerine.forEach((e) => tDict[e] = (tDict[e] || 0) + 1);
  const tArr = Object.values(tDict).sort((a, b) => b - a);
    
  for (const e of tArr) {
    count++;
    if (k > e) k -= e;
    else break;
  }
    
  return count;
}