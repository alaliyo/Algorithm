function solution(today, terms, privacies) {
    let arr = [];
    terms = Object.fromEntries(terms.map(e => e.split(' ')));
    privacies = privacies.map(e => e.split('.').join('/').split(' '));
    today = new Date(today.split('.').join('/'));
    
    for (let i = 0; i < privacies.length; i++) {
        privacies[i][0] = new Date(privacies[i][0]);
        const e = privacies[i];
        privacies[i] = new Date(e[0].setMonth(e[0].getMonth() + Number(terms[e[1]])));
        privacies[i].setDate(privacies[i].getDate() - 1);
    }
    
    for (let i = 0; i < privacies.length; i++) {
        if (today > privacies[i]) {
            arr.push(i + 1);
        }
    }

    return arr;
}