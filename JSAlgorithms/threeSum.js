/*
       给你一个包含 n 个整数的数组 nums ，判断 nums
       中是否存在三个元素 a ， b ， c ，使得 a + b + c = 0 ?请你找出所有满足条件且不􏰂复的三元组。
    注意: 答案中不可以包含重复的三元组。
    例：给定数组 nums = [-1, 0, 1, 2, -1, -4]， 满足要求的三元组集合为:
        [
            [-1, 0, 1],
            [-1, -1, 2] ]
        ]
    */
//    第一种解法  这种方法有重复答案
/**
 * [ 
 *   [ -1, 1, 0 ], 
 *   [ -1, -1, 2 ],
 *   [ 0, -1, 1 ] 
 * ]
 *  1 ， 3 重复
*/
const nums = [-1, 0, 1, 2, -1, -4];

function threeSum(nums = []) {
    const map = new Map();
    const valueArr = []
    for (let i = 0; i < nums.length; i++) {
        const iele = nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            const jele = nums[j];
            const ret = 0 - jele - iele;
            if (map.has(ret)) {
                valueArr.push([iele, jele, ret])
            } else {
                map.set(jele, j)
            }
        }
        map.clear()
    }
    console.log(valueArr);
    return valueArr;
}
// threeSum(nums);
// 第二种解法
// function threeSum1(nums = []) {
//     let set = new Set() // 使用 Set() 即可满足需求, 相对节省内存
//     let result = []
//     nums.sort((a, b) => (a - b))
//     debugger
//     for (let i = 0; i < nums.length - 2; i++) {
//         while (nums[i] === nums[i - 1]) { i++ } // 去重
//         // 第一个数
//         let first = nums[i]
//         let j = i + 1
//         while (j < nums.length) {
//             // 第三个数
//             let second = 0 - nums[j] - first;
//             let third = nums[j]
//             if (set.has(second)) {
//                 result.push([first, second, third])
//                 set.add(third)
//                 j++
//                 while (nums[j] === nums[j - 1]) { j++ } // 去􏰂
//             } else {
//                 set.add(third)
//                 j++
//             }
//         }
//         set = new Set()
//     }
//     console.log(result);
//     return result
// }
// threeSum1(nums);


const threeSum3 = function (nums) {
    if (!nums || nums.length < 3) return [];
    let result = [], second, last
    // 排序
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) break
        // 去􏰂
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        second = i + 1
        last = nums.length - 1;
        while (second < last) {
            const sum = nums[i] + nums[second] + nums[last]
            if (!sum) {
                // sum 为 0
                result.push([nums[i], nums[second], nums[last]])
                // 去􏰂
                while (second < last && nums[second] === nums[second + 1])
                    while (second < last && nums[last] === nums[last - 1]) last--
                second++
                last--;
            }
            else if (sum < 0) second++
            else if (sum > 0) last--
        }

    }
    console.log(result);
    return result
};
threeSum3(nums)