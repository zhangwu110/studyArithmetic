/*
 * @Author: zhangwu01 zhangwu01@58.com
 * @Date: 2024-12-31 10:59:12
 * @LastEditors: zhangwu01 zhangwu01@58.com
 * @LastEditTime: 2025-01-06 09:39:15
 * @Description: 最长公共前缀
    * 编写一个函数来查找字符串数组中的最长公共前缀。

    如果不存在公共前缀，返回空字符串 ""。
    示例 1：
    输入：strs = ["flower","flow","flight"]
    输出："fl"
    示例 2：
    输入：strs = ["dog","racecar","car"]
    输出：""
    解释：输入不存在公共前缀。
 */

function longestCommonPrefix(strs) {
    const rowLength = strs.length;
    const colLength = strs[0].length;
    for (let i = 0; i < colLength; i++) {
        for (let j = 1; j < rowLength; j++) {
            let currentStr = strs[j];
            let prevStr = strs[j - 1];
            if (i > currentStr.length || i > prevStr.length || currentStr[i] !== prevStr[i]) {
                return currentStr.substring(0, i);
            }

        }
    }
    return strs[0];
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));