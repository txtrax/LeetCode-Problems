/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var isDuplicate = false;
    
    nums.forEach((num, i) => {
        if (nums.indexOf(num, i + 1) !== -1) {
            isDuplicate = true;
        }
    })
    
    return isDuplicate;
};