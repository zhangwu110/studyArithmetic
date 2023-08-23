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
export function mergeTwoListSecond(l1: ListNode, l2: ListNode) {
    let node = new ListNode(null);
    let prevHead = node;
    while (l1 && l2) {

        if (l1.element > l2.element) {
            prevHead.next = l2;
            l2 = l2.next;

        } else {
            prevHead.next = l1;
            l1 = l1.next;
        }
        prevHead = prevHead.next
    }
    prevHead.next = l1 === null ? l2 : l1;

    return node

}

// 合并k个链表
/* 
    [
        1 -> 4 -> 5
        2 -> 3 -> 4
        2 -> 6
    ]
*/
export function mergetList(list: ListNode[]) {
    if (list.length === 0) {
        return null
    }
    if (list.length === 1) {
        return list[0]
    }
    if (list.length === 2) {
        return mergeTwoList(list[0], list[1])
    }
    let middle = list.length >> 1;
    let list1 = [];
    for (let i = 0; i < middle; i++) {
        list1.push(list[i])
    }
    let list2 = [];
    for (let i = middle; i < list.length; i++) {
        list2.push(list[i])
    }
    return mergeTwoList(mergetList(list1), mergetList(list2))

}

export const execFn = mergeTwoListSecond.bind(null, nodeA.head, nodeB.head);


