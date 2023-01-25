function solution(id_list, report, k) {
    let countArr = [];
    let reportObj = {};
    let count = [];
    report = report.map(e => e.split(' '));
    
    for (let i = 0; i < id_list.length; i++) {
        countArr.push(0);
        reportObj[id_list[i]] = [];
        count.push(0);
    }
    
    for (let i = 0; i < report.length; i++) {
        let eArr = report[i];
        for (let j = 0; j < id_list.length; j++) {
            if (id_list[j] === eArr[0] && !reportObj[id_list[j]].includes(eArr[1])) {
                reportObj[id_list[j]].push(eArr[1]);
                countArr[id_list.indexOf(eArr[1])] += 1;
            }
        }
    }
    
    for (let i = 0; i < countArr.length; i++) {
        if (countArr[i] >= k) {
            for (let j in reportObj) {
                if (reportObj[j].includes(id_list[i])) {
                    count[id_list.indexOf(j)]++;
                } 
            }
        }
    }
    
    return count;
}