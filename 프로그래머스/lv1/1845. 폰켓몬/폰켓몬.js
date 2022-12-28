function solution(nums) {
    const setLength = [...new Set(nums)].length;
    const numsHalf = nums.length / 2
    return setLength > numsHalf ? numsHalf : setLength;
} 