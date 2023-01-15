function solution(new_id) {
    // 1단계
    new_id = new_id.toLowerCase();
    // 2단계
    new_id = new_id.replace(/[^0-9a-z|.|_|-]/g, '');
    // 3단계
    new_id = new_id.replace(/[\.]{2,}/g, '.');
    // 4단계
    new_id[0] === '.' ? new_id = new_id.substring(1) : null;
    // 5단계
    new_id.length === 0 ? new_id = 'a' : null;
    // 6단계
    new_id.length > 15 ? new_id = new_id.slice(0, 15): null;
    new_id[new_id.length-1] === '.' ? new_id = new_id.slice(0, -1) : null;
    // 7단계
    while (new_id.length < 3) {
        new_id.length < 3 ? new_id += new_id[new_id.length -1] : null;
    }
    // 신규 아이디 추천
    return new_id;
}