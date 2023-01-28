function solution(today, terms, privacies) {
    let arr = [];
    privacies = privacies.map(e => e.split('.').join('/').split(' '));
    terms = Object.fromEntries(terms.map(e => e.split(' ')));
    today = new Date(today.split('.').join('/'));
    
    for (let i = 0; i < privacies.length; i++) {
        const e = privacies[i];
        privacies[i][0] = new Date(e[0]);
        privacies[i] = new Date(e[0].setMonth(e[0].getMonth() + Number(terms[e[1]])));
        privacies[i].setDate(privacies[i].getDate() - 1);
        privacies[i] < today ?  arr.push(i+1) : null;
    }

    return arr;
}