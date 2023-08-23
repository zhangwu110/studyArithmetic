/**
 * 
 * 生成n个成对的括号  递归 
*/
export function generateParenthesis(n) {
    const arr: string[] = [];
    function addK(l, r, str) {
        if (l === n && r === n) {
            arr.push(str);
            return
        }
        if (l < r) {
            return
        }
        if (l < n) {
            addK(l + 1, r, str + "(")
        }
        if (r < n) {
            addK(l, r + 1, str + ")")
        }
    }
    addK(0, 0, "");
   return arr
}
