
function isPalindrome(num) {
    let tem = 0;
    let last = num;
    while (last / 10 > 0) {
        const rest = last % 10;
        last = Math.floor(last / 10);

        tem = tem * 10 + rest;
    }
    return tem === num;
}
console.log(isPalindrome(788));
