function solution(cacheSize, cities) {
    let count = 0;
    const cache = [];
    cities = cities.map(e => e.toLowerCase());
    
    if (cacheSize === 0) return cities.length * 5;
    
    for (let i = 0; i < cities.length; i++) {
        const e = cities[i];
        if (cache.includes(e)) {
            cache.splice(cache.indexOf(e), 1);
            count++;
        } else {
            if (cache.length === cacheSize) {
                cache.shift();
            }
            count += 5;
        }
        cache.push(e);
    }

    return count;
}