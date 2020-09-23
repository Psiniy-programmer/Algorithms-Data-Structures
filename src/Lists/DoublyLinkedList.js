import List from './List.js'

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

export default class DoublyLinkedList extends List {
    /**
     * Create new empty List 
     */
    constructor() {
        super();
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
     * Insert new node at index in linked list
     * @param {number} index - index by which the node will be added
     * @param {number} value - new node value
     */
    insertAtIndex(index, value) {
        if (index < 0 || index > this.size) throw Error("Index out of range")
        let cur = this.head;
        let prev;

        for (let i = 0; i < index; i++) {
            prev = cur;
            cur = cur.next;
        }
        prev.next = new Node(value, cur, prev);
        cur.prev = prev.next;
        this.size++;
    }
    /**
     * Removing elemet at index from linked list
     * @param {number} index - the index by which you want to delete the node
     * @returns {Node.value} removed node
     */
    removeAtIndex(index) {
        if (index < 0 || index > this.size) throw Error("Index out of range Linked List");
        let cur = this.head;
        let prev;

        for (let i = 0; i < index; i++) {
            prev = cur;
            cur = cur.next;
        }
        prev.next = cur.next;
        if (index === this.size) this.tail = prev;
        this.size--;
    }
    /**
     * Sequential list output from head to tail;
     */
    showListFromHead() {
        let cur = this.head;
        for (let i = 0; i < this.size; i++) {
            console.log(`[${i}] :`, cur.value);
            cur = cur.next;
        }
    }
    /**
     * Sequential list output from tail to head;
     */
    showListFromTail() {
        let cur = this.tail;
        for (let i = this.size; i > 0; i--) {
            console.log(`[${i-1}] :`, cur.value);
            cur = cur.prev;
        }
    }
    /**
     * Reverse DoublyLinkedList nodes
     * From Head->Tail to Tail->head
     */
    reverse() {
        let cur = this.head;
        let prev, next = null;
        let saver;
        this.tail = cur;
        while (cur) {
            saver = cur.next;
            cur.next = prev;
            cur.prev = next;
            prev = cur;
            next = cur.next;
            cur = saver;
        }
        this.head = prev;
    }
}