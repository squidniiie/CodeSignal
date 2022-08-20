var search = function (nums, target) {
    let min = 0, max = nums.length - 1
    while (min <= max) {
        let mid = Math.floor((min + max) / 2)
        if (target == nums[mid]) return mid
        else if (target > nums[mid]) min = mid + 1
        else {
            max = mid - 1
        }
    }
    return -1
};
// Runtime: 69 ms, faster than 92.14% of JavaScript online submissions for Binary Search.
// Memory Usage: 45.3 MB, less than 21.72% of JavaScript online submissions for Binary Search.