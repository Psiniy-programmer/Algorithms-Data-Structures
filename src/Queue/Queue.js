class Node {
    /**
     * Create new ones Node
     * @param {number} value - data which node will contain
     * @param {Node} next - link to the following node
     */
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

export default class Queue {
    /**
     * Creating a new one Queue
     */
    constructor() {
        this.front = null;
        this.size = 0;
    }
    /**
     * Insert new item in queue
     * @param {*} value 
     */
    insert(value) {
        this.front = new Node(value, this.front);
        this.size++;
    }
    /**
     * Take front item in queue and remove him
     * @return {number}
     */
    removeFront() {
        if (this.isEmpty) throw new Error('Queue is empty!');
        let value = this.front.value;
        this.front = this.front.next;
        this.size--;
        return value;
    }
    /**
     * @return {Node} 
     */
    getFront() {
        if (this.isEmpty) throw new Error('Queue is empty!');
        return this.front;
    }
    /**
     * Show queue
     */
    show() {
        if (this.isEmpty) return console.log('Queue is empty');
        let cur = this.front;
        for (let i = 0; i < this.size; i++) {
            console.log(`[${i}] :`, cur.value);
            cur = cur.next;
        }
    }
    /**
     * Delete all nodes of queue
     */
    clear() {
        this.front = null;
        this.size = 0;
    }
    /**
     * Checking whether the queue is empty
     * @return {boolean}
     */
    isEmpty() {
        return !this.size ? true : false;
    }
}