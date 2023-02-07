function solution(people, limit) {
    let count = 0;

    let i = 0;
    let j = people.length-1;
    people.sort((a, b) => a - b);

    while (i <= j) {
        if(people[i] + people[j] <= limit) {
            i += 1;
        }
        count += 1;
        j -= 1;
    }

    return count;
}