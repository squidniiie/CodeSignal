/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    // let end = 0;
    // for(let start = 0; start < nums.length; start++){
    //     if(nums[start]!= 0) {
    //         let temp = nums[end]
    //         nums[end] = nums[start]
    //         nums[start] = temp
    //         end++
    //     }
    // }
    let lastNonZeroIndex = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[lastNonZeroIndex] = nums[i]
            lastNonZeroIndex++
        }
    }
    for (let i = lastNonZeroIndex; i < nums.length; i++) {
        nums[i] = 0;
    }
};