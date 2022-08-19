/**
* @param {number[]} nums
* @param {number} target
* @return {number}
*/
let nums = [1, 3, 5, 6];
let target = 5;
var searchInsert = function (nums, target) {
    let start = 0, end = nums.length - 1;
    if (target < nums[start]) {
        return 0;
    }
    if (target > nums[end]) {
        return end + 1;
    }
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (nums[mid] === target) return mid;
        else if (nums[mid] > target) end = mid - 1;
        else start = mid + 1;
    }
    return start;

    // let start = 0;
    // let end = nums.length - 1;
    // while (start <= end) {
    //     let mid = Math.floor((start + end) / 2)
    //     if (nums[mid] === target) {
    //         return mid;
    //     } else if (target < nums[mid]) {
    //         end = mid - 1;
    //     } else {
    //         start = mid + 1;
    //     }
    //     if (target < nums[end]) {
    //         return start;
    //     } else {
    //         return end + 1;
    //     }
    // }
}
console.log(searchInsert(nums, target));