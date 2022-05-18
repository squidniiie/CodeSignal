const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Sorts the given array in-place.
 * Best: O(n) linear when array is already sorted.
 * Average: O(n^2) quadratic.
 * Worst: O(n^2) quadratic when the array is reverse sorted.
 * @param {Array<number>} nums
 * @returns {Array<number>} The given array after being sorted.
 */
// function insertionSort(nums) {
//     let n = nums.length;
//     for (let i = 1; i < n; i++) {
//         let j = i - 1
//         let temp = nums[i]
//         for (j = i - 1; j >= 0; j--) {
//             if (temp < nums[j]) {
//                 [temp, nums[j]] = [nums[j], temp];
//             }
//             // console.log(temp)
//             console.log(nums[j])
//             // console.log(nums)
//         }
//     }
//     return nums;
// }
// console.log(insertionSort(numsRandomOrder))


function insertionSort(nums) {
    for (let i = 1; i < nums.length; i++) {
        let j = i - 1
        let temp = nums[i]
        while (j >= 0 && nums[j] > temp) {
            nums[j + 1] = nums[j];
            j--;
        }
        nums[j + 1] = temp;
    }
    return nums
}
console.log(insertionSort(numsRandomOrder))
