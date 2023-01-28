function solution(today, terms, privacies) {
    privacies = privacies.map(e => e.split('.').join('/').split(' '));
    let arr = [];
    terms = Object.fromEntries(terms.map(e => e.split(' ')));
    today = new Date(today.split('.').join('/'));
    
    for (let i = 0; i < privacies.length; i++) {
        const e = privacies[i];
        privacies[i][0] = new Date(e[0]);
        privacies[i] = new Date(e[0].setMonth(e[0].getMonth() + Number(terms[e[1]])));
        privacies[i].setDate(privacies[i].getDate() - 1);
    }
    
    privacies.map((e, i) => today > e ? arr.push(i+1) : null);

    return arr;
}