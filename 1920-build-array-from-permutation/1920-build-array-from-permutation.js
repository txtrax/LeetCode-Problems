/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    var result = [];
    nums.forEach(num => {
        result.push(nums[num]);
    })
    return result;
};