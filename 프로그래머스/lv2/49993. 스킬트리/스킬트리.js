function solution(skill, skill_trees) {
    let answer = 0;
    let arr = [];
    
    function isDescending(el) {
        for (let i = 0; i < el.length - 1; i++) {
            if (el[i + 1] === -1 && el[i] >= el[i + 1]) {
                continue;
            } else if (el[i] > el[i + 1]) {
                return false;
            } else if (el[i] === -1 && el[i + 1] >= 0) {
                return false;
            }
        }
        return true;
    }

    for (let i = 0; i < skill_trees.length; i++) {
        for (let j = 0; j < skill.length; j++) {
            const index = skill_trees[i].indexOf(skill[j]);
            arr.push(index);
        }
        
        isDescending(arr) ? answer++ : null
        arr = [];
    }
    
    return answer;
}