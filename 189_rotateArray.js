/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const revNums = (nums, start, end) => {
    while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        // swaps the subarrays
        start++
        end--
    }
}
var rotate = function (nums, k) {
    // const array = [...nums];
    // for(let i = 0; i < nums.length; i++){
    //     const rotateIndex = (i + k)% nums.length;
    //     nums[rotateIndex] = array[i]
    // }
    k = k % nums.length;
    // checks to see if k is greater than the length of the array
    nums.reverse();
    // [7,6,5,4,3,2,1]
    revNums(nums, 0, k - 1);
    // 0 is the start index, k - 1 is the end index
    revNums(nums, k, nums.length - 1);
    // k is the start index, nums.length - 1 is the end index

};