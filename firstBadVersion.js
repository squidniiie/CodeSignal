// 278. First Bad Version
// https://leetcode.com/problems/first-bad-version/
// Test API:
function isBadVersion(num) {
    if (num >= 4) {
        return true;
    }
}
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let start = 1;
        let end = n;
        while (start <= end) {
            let mid = Math.floor((start + end) / 2);
            if (isBadVersion(mid)) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
        return start;
        //   let low = 1;
        //   let high = n;
        //   let result = -1;
        //   while(low <= high) {
        //     const middle = Math.floor((low + high) / 2);
        //     if (isBadVersion(middle)) {
        //       result = middle;  // save the middle value
        //       high = middle - 1; // update to search for the left most occurence
        //     } else {
        //       low = middle + 1;
        //     }
        //   }
        // 
    };
};
// Test Cases:
console.log(solution(isBadVersion)(5)); // should return 4