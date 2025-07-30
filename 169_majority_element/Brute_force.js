/**
 * @param {number[]} nums
 * @return {number}
 */

var count = function (nums, n) {
    let count = 1;
    for (let j = 1; j < nums.length; j++) {
        if (n == nums[j]) {
            count++;
        }
    }
    return count;
}

var majorityElement = function (nums) {
    for (let i = 0; i <= nums.length / 2; i++) {
        if (count(nums, nums[i]) > nums.length / 2) {
            return nums[i];
        }
    }
};

let nums = [3, 2, 3, 1, 1, 1];
console.log(majorityElement(nums));