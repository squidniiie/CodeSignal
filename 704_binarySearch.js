var search = function (nums, target) {
    let min = 0;
    let max = nums.length - 1
    while (min < max) {
        let mid = Math.floor((min + max) / 2)
        if (target === nums[mid]) {
            return mid
        }
        else if (target > nums[mid]) {
            min = mid + 1
        } else {
            max = mid - 1
        }
        return -1
    }
}