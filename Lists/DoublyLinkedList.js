class Node {
    /**
     * Create new ones Node
     * @param {number} value - data which node will contain
     * @param {Node} next - link to the following node
     * @param {Node} prev - link to the previous node
     */
    constructor(value, next, prev) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}

class DoublyLinkedList {
    /**
     * Create new empty List 
     */
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    /**
     * Insert new node at head
     * @param {number} value - new node value
     */
    insertFirst(value) {
        if (!this.size) this.head = this.tail = new Node(value, this.head, this.tail);
        else {
            let prev = this.head;
            this.head = new Node(value, this.head, null);
            prev.prev = this.head;
        }
        this.size++;
    }
    /**
     * Insert new node at tail
     * @param {number} value - new node value
     */
    insertLast(value) {
        if (!this.head) return this.insertFirst(value);
        let cur = this.head;
        let prev;
        while (cur.next) {
            prev = cur;
            cur = cur.next;
        }
        cur.next = this.tail = new Node(value, null, prev);
        this.size++;
    }
    /**
     * Sequential list output from head to tail;
     */
    showListFromHead() {
        let cur = this.head;
        for (let i = 0; i < this.size; i++) {
            console.log(`[${i}]` ,cur.value);
            cur = cur.next;
        }
    }
    /**
     * Sequential list output from tail to head;
     */
    showListFromTail() {
        let cur = this.tail;
        for (let i = this.size; i > 0; i--) {
            console.log(`[${i-1}] :` ,cur.value);
            cur = cur.prev;
        }
    }
    /**
     * Get the value of the tail of the list
     * @returns {number} - Linked list tail value
     */
    getTail() {
        console.log(this.tail.value);
        return this.tail.value;
    }
    /**
     * Get the value of the head of the list
     * @returns {number} - Linked list head value
     */
    getHead() {
        console.log(this.head.value);
        return this.head.value;
    }
    /**
     * Delete all nodes of linked list
     */
    clearList() {
        this.size = 0;
        this.head = null;
        this.tail = null;
    }
}

const DoublyList = new DoublyLinkedList();
DoublyList.insertFirst(1);
DoublyList.insertFirst(2);
DoublyList.showListFromHead();
// DoublyList.showListFromTail();
// DoublyList.getTail();
// console.log(DoublyList)