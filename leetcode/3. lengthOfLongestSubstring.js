
// 中文注释
// https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
// 最长子串
function lengthOflongestSubstring(s) {
    if (!s) {
        return 0;
    }
    const a = new Map();
    let i = 0;
    let j = 0;
    let max = 0;
    while (j < s.length) {
        let c = s[j];
        a.set(c, (a.get(c) || 0) + 1);
        j++;
        while (a.get(c) > 1) {
            a.set(s[i], (a.get(s[i])) - 1);
            i++;
        }
        max = Math.max(max, j - i);

    }
    return max;
}
console.log(lengthOflongestSubstring("abcaassdc"));
