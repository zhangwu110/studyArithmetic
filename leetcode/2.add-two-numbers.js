
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
// 两数相加
function twoSum(l1, l2) {
    const dumy = new ListNode(null);
    let tem = 0;
    while (l1 !== null || l2 == null) {
        let sum = 0;
        if (l1.value == null) {
            sum = l2.value + tem;
            l2 = l2.next;
        } else if (l2.value == null) {
            sum = l1.value + tem;
            l1 = l1.next;
        } else {
            sum = l1.value + l2.value + tem;
            l1 = l1.next;
            l2 = l2.next;

        }
        tem = Math.floor(sum / 10);
        const res = Math.floor(sum % 10);
        dumy.next = res;
    }
    return dumy.next;
}