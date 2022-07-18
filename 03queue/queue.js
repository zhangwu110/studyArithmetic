class Queue {
    constructor() {
        this.count = 0;
        this.lowestCount = 0; //帮我们追踪第一个元素  主要用于删除操作(dequeue仔细读)
        this.items = {};
    }
    //入队 
    enqueue(element) {
        this.items[this.count] = element;
        this.count++
    }
    //移除队列第一项  
    dequeue() {
        if (this.isEmpty()) {
            return undefined
        }
        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount]
        this.lowestCount++;
        return result;

    }
    //返回队列的第一个元素
    peek() {
        if (this.isEmpty()) {
            return undefined
        }
        return this.items[this.lowestCount]
    }
    isEmpty() {
        return this.count === this.lowestCount;
    }
    size() {
        return this.count - this.lowestCount
    }
    clear() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {}
    }
    toString() {
        if (this.isEmpty()) {
            return ''
        }
        let objString = `${this.items[this.lowestCount]}`
        for (let i = this.lowestCount + 1; i < this.count; i++) {
            objString = `${objString},${this.items[i]}`
        }
        return objString

    }
}
//双端队列
class Deque {
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }
    //前端添加元素
    addFront(element) {
        if (this.isEmpty()) {
            this.addBack(element)
        } else if (this.lowestCount > 0) {
            this.lowestCount--;
            this.items[this.lowestCount] = element;
        } else {
            for (let i = this.count; i > 0; i--) {
                this.items[i] = this.items[i - 1];
            }
            this.count++;
            this.lowestCount = 0;
            this.items[0] = element;
        }
    }
    //后端添加元素
    addBack(element) {
        this.items[this.count] = element;
        this.count++
    }
    //前端移除元素
    removeFront() {
        if (this.isEmpty()) {
            return undefined
        }
        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount]
        this.lowestCount++;
        return result;
    }
    //后端移除元素
    removeBack() {
        if (this.isEmpty()) {
            return undefined
        }
        // debugger
        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count - this.lowestCount];
        return result

    }
    peekFront() {
        if (this.isEmpty()) {
            return undefined
        }
        return this.items[this.lowestCount]
    }
    peekBack() {
        if (this.isEmpty()) {
            return undefined
        }
        return this.items[this.count]
    }
    //是否是空的
    isEmpty() {
        return this.count === this.lowestCount;
    }
    size() {
        return this.count - this.lowestCount
    }
    toString() {
        if (this.isEmpty()) {
            return ''
        }
        let objString = `${this.items[this.lowestCount]}`
        for (let i = this.lowestCount + 1; i < this.count; i++) {
            objString = `${objString},${this.items[i]}`
        }
        return objString

    }
}