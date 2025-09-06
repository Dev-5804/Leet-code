/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let res = [];

    for (let i = 0; i < nums.length; i++) {
        let mult = 1;
        for (let j = 0; j < nums.length; j++) {
            if (i != j) {
                mult = mult * nums[j];
            }
        }
        res.push(mult);
    }

    return res;
};