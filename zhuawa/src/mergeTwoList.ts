/**
 * 合并两个有序链表 合并成一个新的升序链表并返回
 * 如 1 -> 2 -> 4
 *   1 -> 3 -> 4
 * 合并为 1 -> 1 -> 2-> 3 -> 4 -> 4
 * 
*/
import { LinkedList, ListNode } from "./utils";

const nodeA = new LinkedList();
nodeA.push(1);
nodeA.push(2);
nodeA.push(4);

const nodeB = new LinkedList()
nodeB.push(1);
nodeB.push(3);
nodeB.push(4);

// 第一种方法 递归
export function mergeTwoList(l1: ListNode, l2: ListNode) {
    if (l1 == null) {
        return l2
    }
    if (l2 == null) {
        return l1
    };
    if (l1.element < l2.element) {
        l1.next = mergeTwoList(l1.next, l2);
        return l1
    } else {
        l2.next = mergeTwoList(l1, l2.next)
        return l2
    }

}
// 第二种方法 遍历

export const execFn = mergeTwoList.bind(null, nodeA.head, nodeB.head);


