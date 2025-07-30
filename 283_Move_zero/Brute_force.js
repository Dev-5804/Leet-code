/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        if (nums[i] == 0) {
            nums.splice(i, 1);
            i--;
        }
    }
    console.log(nums);
    console.log(len - nums.length);
    if (len != nums.length) {
        const new_len = nums.length;
        for (let j = 1; j <= (len - new_len); j++) {
            nums.push(0)
            console.log(nums);
        }
    }
    console.log(nums);
};

let nums = [0, 0, 0]
moveZeroes(nums)