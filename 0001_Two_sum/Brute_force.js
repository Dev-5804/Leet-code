/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let pointer = 0; pointer < nums.length; pointer++) {
            if (i != pointer && (nums[i] + nums[pointer]) == target) {
                return [i, pointer]
            }
        }
    }
    return null
};