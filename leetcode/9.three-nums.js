
// 输入：nums = [-1,0,1,2,-1,-4]
// 输出：[[-1,-1,2],[-1,0,1]]

var threeSum = function (nums) {
    nums.sort((a, b) => a - b);
    // n 为 3，从 nums[0] 开始计算和为 0 的三元组
    return nSumTarget(nums, 3, 0, 0);
};

// 注意：调用这个函数之前一定要先给 nums 排序
// n 填写想求的是几数之和，start 从哪个索引开始计算（一般填 0），target 填想凑出的目标和
function nSumTarget(nums, n, start, target) {
    const sz = nums.length;
    let res = [];
    // 至少是 2Sum，且数组大小不应该小于 n
    if (n < 2 || sz < n) return res;
    // 2Sum 是 base case
    if (n === 2) {
        // 双指针那一套操作
        let lo = start, hi = sz - 1;
        while (lo < hi) {
            const sum = nums[lo] + nums[hi];
            const left = nums[lo], right = nums[hi];
            if (sum < target) {
                while (lo < hi && nums[lo] === left) lo++;
            } else if (sum > target) {
                while (lo < hi && nums[hi] === right) hi--;
            } else {
                res.push([left, right]);
                while (lo < hi && nums[lo] === left) lo++;
                while (lo < hi && nums[hi] === right) hi--;
            }
        }
    } else {
        // n > 2 时，递归计算 (n-1)Sum 的结果
        for (let i = start; i < sz; i++) {
            const sub = nSumTarget(nums, n - 1, i + 1, target - nums[i]);
            for (let arr of sub) {
                // (n-1)Sum 加上 nums[i] 就是 nSum
                arr.push(nums[i]);
                res.push(arr);
            }
            while (i < sz - 1 && nums[i] === nums[i + 1]) i++;
        }
    }
    return res;
}

let nums = [-1, 0, 1, 2, -1, -4]
// [-4,-1,-1,0,1,2]
// [[-1,-1,2],[-1,0,1]]
console.log(threeSum(nums));

