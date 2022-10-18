/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let pointer1 = m - 1;
    let pointer2 = n - 1;
    let i = m + n - 1;
    
    while (pointer2 >= 0) {
        let val1 = nums1[pointer1];
        let val2 = nums2[pointer2];
        
        if (val1 > val2) {
            nums1[i] = val1;
            i--;
            pointer1--;
        } else {
            nums1[i] = val2;
            i--;
            pointer2--;
        }
    }
    
};