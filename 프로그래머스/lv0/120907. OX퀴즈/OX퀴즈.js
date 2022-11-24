function solution(quiz) {
    for (let i = 0; i < quiz.length; i++) {
        let arr = quiz[i].split(' = ');
        new Function('return('+ arr[0] + ')')() === Number(arr[1]) ? quiz[i] = 'O' : quiz[i] = 'X'
    }
    return quiz
}