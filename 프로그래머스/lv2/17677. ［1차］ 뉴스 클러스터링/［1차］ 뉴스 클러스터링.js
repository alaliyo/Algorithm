function solution(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    const arr1 = [];
    const arr2 = [];
    let intersection = 0;
    const regex = /^[a-z]+$/;

    for (let i = 0; i < str1.length - 1; i++) {
        const cut1 = [...str1].slice(i, i+2).join('');
        regex.test(cut1) ? arr1.push(cut1) : null;
    }
    
    for (let i = 0; i < str2.length - 1; i++) {
        const cut2 = [...str2].slice(i, i+2).join('');
        regex.test(cut2) ? arr2.push(cut2) : null;
    }
    
    let union = arr1.length + arr2.length;
    
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                arr1.splice(i, 1);
                arr2.splice(j, 1);
                intersection++;
                i--;
                break;
            }
        }
    }
    
    const num = Math.floor(intersection / (union - intersection) * 65536);
    
    return num >= 0 ? num : 65536;
}