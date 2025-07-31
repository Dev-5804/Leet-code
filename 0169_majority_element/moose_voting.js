/**
 * @param {number[]} nums
 * @return {number}
 */

var majorityElement = function (nums) {
    let count = 1;
    let candidate = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (candidate == nums[i]) {
            count++;
        }
        else{
            count--;
            if (count == 0) {
                candidate = nums[i]
                count++;
            }
        }
    }
    return candidate;
}

// function testMajorityElement(fn) {
//     const tests = [
//         { input: [3, 2, 3], expected: 3 },
//         { input: [2, 2, 1, 1, 1, 2, 2], expected: 2 },
//         { input: [1], expected: 1 },
//         { input: [1, 2, 3, 2, 2, 2, 2], expected: 2 },
//         { input: [5, 5, 5, 1, 2, 5, 3], expected: 5 },
//         { input: [7, 7, 7, 7, 7], expected: 7 },
//         { input: [4, 4, 4, 4, 5, 5, 5, 4], expected: 4 },
//     ];

//     for (let { input, expected } of tests) {
//         const result = fn([...input]); // use a copy to prevent mutation
//         console.log(`Input: [${input}] ➜ Output: ${result} (${result === expected ? "✔" : "❌ Expected: " + expected})`);
//     }
// }

// testMajorityElement(majorityElement)