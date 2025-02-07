// 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。

// 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。



var letterCombinations = function (digits) {
    const numsMap = {
        "": "",
        "1": "",
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    }
    if (!digits) return;
    const res = [];
    let str = "";
    const len = digits.length;
    function back(digits, start = 0) {
        if (start === len) {
            res.push(str);
            return;
        };
        const digit = numsMap[digits[start]];
        for (let i = 0; i < digit.length; i++) {
            str += digit[i];
            back(digits, start + 1);
            str = str.slice(0, -1);
        }
    }
    back(digits,0);
    return res;
};

// 输入：digits = "232"
// 输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
console.log(letterCombinations("23"));