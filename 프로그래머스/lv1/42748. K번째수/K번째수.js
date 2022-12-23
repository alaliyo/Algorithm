function solution(array, commands) {
    commands.map((e, i) => commands[i] = array.slice(e[0] -1, e[1]).sort((a, b) => a - b)[e[2] -1]);

    return commands;
}