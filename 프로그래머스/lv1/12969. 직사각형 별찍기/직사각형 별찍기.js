process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    let str = '';
    let star = '';
    for (let i = 0; i < a; i++) {
        str += '*';
    }
    for (let i = 0; i < b; i++) {
        star += `${str}\n`;
    }
    console.log(star)
});