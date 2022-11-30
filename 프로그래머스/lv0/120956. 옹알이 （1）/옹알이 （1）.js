function solution(babbling) {
    let count = 0;
    babbling.map(e => {
        let a = e.replace('aya', ' ').replace('ye', ' ').replace('woo', ' ').replace('ma', ' ');
        for (let i = 0; i < 7; i++) {
            a = a.replace(' ', '');
        }
        a === '' ? count++ : null;
    })
    
    return count;
}