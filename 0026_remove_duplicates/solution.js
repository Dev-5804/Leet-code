/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let ans = [nums[0]];
    let pointer = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] != nums[pointer]) {
            ans.push(nums[i])
            pointer = i;
        }
    }
    return ans.length;
};


// the output seems correct actually the program is worng there was condition that says creating a new array is not allowed