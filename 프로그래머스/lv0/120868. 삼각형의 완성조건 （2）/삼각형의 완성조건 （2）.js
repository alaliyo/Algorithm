function solution(sides) {
    const numArr = sides.sort((a, b) => a - b)
    const Arr0 = numArr[0]
    const Arr1 = numArr[1]

    return (Arr1 - (Arr1 - Arr0)) + (Arr1 + Arr0 - Arr1 - 1)
}