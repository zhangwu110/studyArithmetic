export function defaultEqualsFn(a, b) {
    return a === b;
}
export class ListNode {
    element: any;
    next: any;
    constructor(element) {
        this.element = element;
        this.next = null
    }
}

// 单向链表
export class LinkedList {
    count: number;
    head: any;
    equalsFn: Function;
    constructor(equalsFn = defaultEqualsFn) {
        this.count = 0;
        this.head = null;
        this.equalsFn = equalsFn;
    }
    //向链表尾部添加一个元素
    push(element) {
        const node = new ListNode(element);
        if (this.head == null) {
            this.head = node;
            return
        }
        let current = this.head;
        while (current.next != null) {
            current = current.next;
        }
        current.next = node;
        this.count++;
    }
    //向链表指定位置添加一个元素
    insert(element, index) {
        if (index >= 0 && index <= this.count) {
            const node = new ListNode(element)
            let current = this.head
            if (index === 0) {
                node.next = current;
                this.head = node;
            } else {

                let previous = this.getElementAt(index - 1);
                current = current.next;

                previous.next = node;
                node.next = current;
            }
            this.count++;
            return true

        }
        return false
    }
    //返回链表中特定元素的位置 不存在则返回undefined
    getElementAt(index) {
        if (index >= 0 && index < this.count) {
            let node = this.head;
            for (let i = 0; i < index; i++) {
                node = node.next
            }
            return node;
        }
        return undefined;
    }
    //从链表中移除一个元素
    remove(element) {
        const index = this.indexOf(element);
        this.removeAt(index)
    }
    //返回元素在链表中的索引
    indexOf(element) {
        let current = this.head;
        for (let i = 0; i < this.count; i++) {
            if (this.equalsFn(element, current.element)) {
                return i
            }
            current = current.next;
        }
        return -1;
    }
    //从链表的特定位置移除一个元素
    removeAt(index) {
        if (index >= 0 && index < this.count) {
            let current = this.head;
            if (index === 0) {
                this.head = current.next
            } else {
                let previous = this.getElementAt(index - 1);
                // for (let i = 0; i < index; i++) {
                //     previous = current;
                //     current = current.next;
                // }
                current = previous.next;
                previous.next = current.next
            }
            this.count--;

        }
        return undefined
    }
    //如果链表中不包含任何元素，返回true 否则返回false
    isEmpty() {
        return this.size() === 0;
    }
    size() {
        return this.count;
    }
    getHead() {
        return this.head;
    }
    toString() {
        if (this.head === null) {
            return ''
        }
        let objString = `${this.head.element}`;
        let current = this.head.next;
        for (let i = 1; i < this.count; i++) {

            objString = `${objString},${current.next}`;
            current = current.next;
        }
        return objString;
    }
}