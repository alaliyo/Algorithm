function solution(new_id) {
    new_id = new_id.toLowerCase();
    new_id = new_id.replace(/[^0-9a-z|.|_|-]/g, '');
    
    new_id = new_id.replace(/[\.]{2,}/g, '.');
    
    new_id[0] === '.' ? new_id = new_id.substring(1) : null;
    
    new_id.length === 0 ? new_id = 'a' : null;
    
    new_id.length > 15 ? new_id = new_id.slice(0, 15): null;
    
    new_id[new_id.length-1] === '.' ? new_id = new_id.slice(0, -1) : null;
    
    while (new_id.length < 3) {
        new_id.length < 3 ? new_id += new_id[new_id.length -1] : null;
    }
    
    return new_id;
}