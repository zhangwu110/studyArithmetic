export function defaultEqualsFn(a, b) {
    return a === b;
}

export class Node {
    constructor(element) {
        this.element = element;
        this.next = null
    }
} 
 
// 单向链表
export class LinkedList {
    constructor(equalsFn = defaultEqualsFn) {
        this.count = 0;
        this.head = null;
        this.equalsFn = equalsFn;
    }
    //向链表尾部添加一个元素
    push(element) {
        const node = new Node(element);
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
            const node = new Node(element)
            const current = this.head
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

export function defaultToString(item) {
    if (item === null) {
        return "NULL"
    } else if (item === undefined) {
        return 'UNDEFINED'
    } else if (typeof item === 'string' || item instanceof String) {
        return `${item}`
    }

    return item.toString()
}

// 双向链表
export class DoublyNode extends Node {
    constructor(element, next, prev) {
        super(element, next)
        this.prev = prev;
    }
}

export class DoubleyLinkedList extends LinkedList {
    constructor(equalFn = defaultEqualsFn) {
        super(equalFn);
        this.tail = undefined;
    }
    insert(index, element) {
        if (index >= 0 && index <= this.count) {
            const node = new DoublyNode(element);
            const current = this.head;
            if (index === 0) {
                if (this.head == null) {
                    this.head = node;
                    this.tail = node;
                } else {
                    // 往第一项插入  此时插入的node  prev为null  next为当前的head
                    node.next = current;
                    current.prev = node;
                    this.head = node;

                }
            } else if (index === this.count) {
                // 往最后一项添加元素  此时最后一项元素的next为null  prev为原先的tail
                this.tail.next = node;
                node.prev = this.tail;
                this.tail = node;
            } else {
                // 往中间某个位置插入元素  需要修改当前插入元素的prev和next   以及上一个元素的next和下一个元素的prev
                // 先获取上一个元素     同时保存下一个元素
                const previous = this.getElementAt(index - 1);
                const current = previous.next;
                previous.next = node;
                node.prev = previous;
                node.next = current;
                current.prev = node;
            }
            this.count++;
            return true
        }
        return false
    }
    removeAt(index) {
        if (index >= 0 && index <= this.count) {
            const current = this.head;
            if (index === 0) {
                //删除头部元素时，如果当前链表长度为1  则直接清空链表  否则只把当前head往后移动一位 并把head的prev置空
                this.head = current.next;
                if (this.count === 1) {
                    this.tail = undefined
                } else {
                    this.head.prev = undefined;
                }
            } else if (index === (this.count - 1)) {
                // 当删除最后一位时 修改tail   并把previous的next置空
                current = this.tail;
                this.tail = current.prev;
                this.tail.next = undefined;
            } else {
                // 删除中间某一个元素时
                current = this.getElementAt(index);
                const previous = current.prev;
                previous.next = current.next;
                current.next.prev = previous;

            }
            this.count--;
            return current.element;
        }
        return undefined;

    }
}

// set 数据结构  即  集合
export class Set {
    constructor() {
        this.items = {};
        this.length = 0;
    }
    has(element) {
        return Object.prototype.hasOwnProperty.call(this.items, element);
    }
    add(element) {
        // set 数据结构的一个特性就是  不存在重复元素
        if (!this.has(element)) {
            this.items[element] = element;
            this.length++;
            return true;

        }
        return false;
    }
    delete(element) {
        if (this.has(element)) {
            delete this.items[element];
            this.length--;
            return true
        }
        return false;
    }
    clear() {
        this.items = {};
    }
    values() {
        return Object.values(this.items);
    }
    size() {
        return Object.keys(this.items).length;
    }
    union(otherSet) {
        // A B 的并集
        const unionSet = new Set();
        this.values().forEach(element => {
            unionSet.add(element)
        });
        otherSet.values().forEach((element) => {
            unionSet.add(element)
        })
        return unionSet;

    }
    intersection(otherSet) {
        // A B 的交集
        const intersectionSet = new Set();
        this.values().forEach((element) => {
            if (otherSet.has(element)) {
                intersectionSet.add(element)
            }
        })
        return intersectionSet;

    }
    // A B 的差集
    difference(otherSet) {
        const differenceSet = new Set();
        this.values().forEach((element) => {
            if (!otherSet.has(element)) {
                differenceSet.add(element);
            }
        })
        return otherSet;
    }
    // A 是否是B 的子集
    isSubsetOf(otherSet) {
        if (this.length > otherSet.length) {
            return false
        }
        const isSubset = this.values().every((element) => {
            return otherSet.has(element)
        })
        return isSubset
    }
}


// 字典

export class ValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
    toString() {
        return `[#${this.key}:${this.value}]`
    }
}
export class Dictionary {
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn;
        this.table = {};
    }
    hasKey(key) {
        // 有 返回true 没有返回false
        return this.table[this.toStrFn(key)] != null
    }
    set(key, value) {
        // 添加元素
        if (key != null && value != null) {
            const tableKey = this.toStrFn(key);
            this.table[tableKey] = new ValuePair(key, value)
            return true;
        }
        return false;
    }
    remove(key) {
        // 移除元素
        if (this.hasKey(key)) {
            delete this.table[key];
            return true;
        }
        return false;
    }
    get(key) {
        // 用键名查找元素并返回
        const valuePair = this.table[this.toStrFn(key)];
        return valuePair == null ? undefined : valuePair.value;
    }
    size() {
        // 返回字典中数值的数量
        return Object.keys(this.table).length;
    }
    clear() {
        // 清空字典
        this.table = {}
    }
    isEmpty() {
        // size 等于0 的时候返回true 否则返回false
        this.size() === 0;
    }
    keys() {
        // 获取所有键名的数组
        // return Object.keys(this.table);
        // 或者
        return this.keyValues().map(valuePair => valuePair.key)

    }
    values() {
        return this.keyValues().map(valuePair => valuePair.value)
    }
    keyValues() {
        // 获取所有键值的数组
        return Object.values(this.table)
    }
    forEach(callbackFn) {
        // 迭代字典 类似数组的foreach方法
        const valuesPair = this.keyValues();
        for (let i = 0; i < valuesPair.length; i++) {
            const element = valuesPair[i];
            const result = callbackFn(element.key, element.value);
            if (result === false) {
                break
            }
        }
    }
    toString() {
        if (this.isEmpty()) {
            return ""
        };
        var valuePairs = this.keyValues();
        // var objString = `${valuePairs[0]}`
        var objString = ``
        for (var i = 0; i < valuePairs.length; i++) {
            objString = `${objString},${valuePairs[i].toString()}`
        }
        return objString

        /*
           以上代码与下方代码效果一样
        */

        // return `${dict.keyValues()}`   
    }
}