function solution(nums) {
    const set = new Set(nums);
    const setLength = [...set].length;
    const numsHalf = nums.length / 2
    return setLength > numsHalf ? numsHalf : setLength;
} 