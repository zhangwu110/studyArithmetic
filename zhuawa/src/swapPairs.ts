import { LinkedList, ListNode } from "./utils";

const nodeA = new LinkedList();
nodeA.push(1);
nodeA.push(2);
nodeA.push(4);
nodeA.push(5);

function swapPairs(head: ListNode) {
    const current = new ListNode(0);
    current.next = head;
    let tem = current;
    while (tem.next && tem.next.next) {
        const firstNode = tem.next;
        const secondNode = tem.next.next;
        firstNode.next = secondNode.next;

        tem.next = secondNode;
        secondNode.next = firstNode;
        tem = tem.next.next;

    }
    return current
}
export function execSwap() {
   return swapPairs(nodeA.getHead())

}