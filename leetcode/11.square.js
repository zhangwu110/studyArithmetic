var isValid = function (str) {
    let left = [];
    for (let c of str) {
        if (c === '(' || c === '{' || c === '[') {
            left.push(c);
        } else {
            // 字符 c 是右括号
            if (left.length !== 0 && leftOf(c) === left[left.length - 1]) {
                left.pop();
            } else {
                // 和最近的左括号不匹配
                return false;
            }
        }
    }
    // 是否所有的左括号都被匹配了
    return left.length === 0;
};

var leftOf = function (c) {
    if (c === '}') return '{';
    if (c === ')') return '(';
    return '[';
};
