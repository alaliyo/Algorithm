function solution(today, terms, privacies) {
    let arr = [];
    privacies = privacies.map(e => e.split('.').join('/').split(' '));
    terms = Object.fromEntries(terms.map(e => e.split(' ')));
    today = new Date(today.split('.').join('/'));
    
    for (let i = 0; i < privacies.length; i++) {
        let e = privacies[i];
        e[0] = new Date(e[0]);
        e = new Date(e[0].setMonth(e[0].getMonth() + Number(terms[e[1]])));
        e.setDate(e.getDate() - 1);
        e < today ?  arr.push(i+1) : null;
    }

    return arr;
}