/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[i] !== nums[j]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i+1
}

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let expectedNums = [0, 1, 2, 3, 4];

let k = removeDuplicates(nums);

if (k !== expectedNums.length) {
    console.error(`❌ Expected length ${expectedNums.length}, got ${k}`);
    process.exit(1);
}

for (let i = 0; i < k; i++) {
    if (nums[i] !== expectedNums[i]) {
        console.error(`❌ Mismatch at index ${i}: expected ${expectedNums[i]}, got ${nums[i]}`);
        process.exit(1);
    }
}

console.log("✅ Test passed!");
