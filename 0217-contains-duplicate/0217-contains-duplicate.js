/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    
    for (var i = 0; i < nums.length; i++) {
        if (nums.indexOf(nums[i], i + 1) !== -1) {
            return true;
        } 
    }
    
    return false;

};