/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * 
 * https://leetcode.com/problems/median-of-two-sorted-arrays/
 * 中文注释
 * 
 * 两个有序数组的中位数
 * 
 */

function findMedianSortedArrays(nums1, nums2) {
    const length1 = nums1.length, length2 = nums2.length;
    const totalLength = length1 + length2;

    if (totalLength % 2 === 1) {
        const midIndex = Math.floor(totalLength / 2);
        return getKthElement(nums1, nums2, midIndex + 1);
    } else {
        const midIndex1 = Math.floor(totalLength / 2) - 1;
        const midIndex2 = Math.floor(totalLength / 2);
        return (getKthElement(nums1, nums2, midIndex1 + 1) + getKthElement(nums1, nums2, midIndex2 + 1)) / 2.0;
    }
}

function getKthElement(nums1, nums2, k) {
    const length1 = nums1.length, length2 = nums2.length;
    let index1 = 0, index2 = 0;

    while (true) {
        // Handle edge cases
        if (index1 === length1) {
            return nums2[index2 + k - 1];
        }
        if (index2 === length2) {
            return nums1[index1 + k - 1];
        }
        if (k === 1) {
            return Math.min(nums1[index1], nums2[index2]);
        }

        // Normal case
        const half = Math.floor(k / 2);
        const newIndex1 = Math.min(index1 + half, length1) - 1;
        const newIndex2 = Math.min(index2 + half, length2) - 1;
        const pivot1 = nums1[newIndex1], pivot2 = nums2[newIndex2];
        debugger
        if (pivot1 <= pivot2) {
            k -= (newIndex1 - index1 + 1);
            index1 = newIndex1 + 1;
        } else {
            k -= (newIndex2 - index2 + 1);
            index2 = newIndex2 + 1;
        }
    }
}
nums1 = [1, 2], nums2 = [3, 4]
console.log(findMedianSortedArrays(nums1, nums2));
