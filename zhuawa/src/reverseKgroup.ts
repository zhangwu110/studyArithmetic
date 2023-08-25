/* 
  K个一组翻转链表  每K个节点为一组 进行翻转 
  k是一个正整数 他的值小于或者等于链表的长度

  如   1->2->3->4->5
  当 k 为 2 时  输出 2->1->4->3->5
  当 k 为 3 时  输出 3->2->1->4->5
  当 k 为 4 时  输出 4->3->2->1->5
 */

import { LinkedList, ListNode } from "./utils";

const nodeA = new LinkedList();
nodeA.push(1);
nodeA.push(2);
nodeA.push(3);
nodeA.push(4);
nodeA.push(5);

function reverseKgroup(k: number, head: ListNode) {
    let node = new ListNode(null)
    let start = head;
    let end = head;
    let i = 1;
    let tem: ListNode;

    while (end) {

        if (i % k === 0) {
            const reverseNode = resverLink(start, end);
            if (node.next === null) {
                node.next = reverseNode;
            }
            if (tem) {
                tem.next = reverseNode;
            }
            tem = start;
            start = end = start.next;

        } else {
            end = end.next;
        }
        i++;
    }
    return node.next
}

// 1，2，3
// prev null   cur 1   next 2->3
//  prev 1   cur 2   next  3 
//   prev 2->1   cur 3 next 4
function resverLink(start: ListNode, end: ListNode) {
    let prev: any | LinkedList = null;
    let cur = start;
    let first = start;
    let next;
    while (prev !== end) {
        next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    first.next = next
    return prev
    /* 
       1(cur) ,2(next),3,4,5
       第一次循环    2 cur ,3(next),4,5   ( 1->null) prev
       第二次循环    2(prev) ->  ( 1->null)      3cur   4 next 5
       第三次循环     3(prev) -> 2 ->  ( 1->null)    4 cur 5
       第四次循环      4（prev） -> 3 ->2->1    5cur
       第五次循环      5-》 -> 3 ->2->1    5cur
    */
}
export const execReverFn = () => {

    console.log(reverseKgroup(4, nodeA.getHead()));
    // console.log(resverLink(nodeA.getHead(), nodeA.getElementAt(4)));
}

