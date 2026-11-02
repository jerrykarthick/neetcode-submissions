class Solution {
    twoSum(nums, target) {
        for (let i = 0; i < nums.length; i++) {
            let res = target - nums[i];
            let loc = nums.indexOf(res);

            if (loc >= 0 && loc !== i) {
                return [i, loc];
            }
        }
    }
}