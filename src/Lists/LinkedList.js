import List from './List.js'

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

export default class LinkedList extends List {
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
        if (!this.size) this.head = this.tail = new Node(value, this.head);
        else {
            this.head = new Node(value, this.head);
        }
        this.size++;
    }
    /**
     * Insert new node at tail
     * @param {number} value - new node value
     */
    insertLast(value) {
        if (!this.head) return this.insertFirst(value);
        let node = new Node(value);
        let cur = this.head;

        while (cur.next) {
            cur = cur.next;
        }
        cur.next = this.tail = node;
        this.size++;
    }
    /**
     * Insert new node at index in linked list
     * @param {number} index - index by which the node will be added
     * @param {number} value - new node value
     */
    insertAtIndex(index, value) {
        if (index < 0 || index > this.size) throw Error("Index out of range");
        if (index === 0) return this.insertFirst(value);

        let cur = this.head;
        let temp;

        for (let i = 0; i < this.size; i++) {
            if (i + 1 === index) {
                temp = cur.next;
                cur.next = new Node(value, temp);
                break;
            }
            cur = cur.next;
        }
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
        let prevNode;

        if (index === 0) {
            this.size--;
            return this.head = cur.next;
        }

        for (let i = 0; i < index; i++) {
            prevNode = cur;
            cur = cur.next;
        }
        prevNode.next = cur.next;
        this.size--;
        if (index === this.size) this.tail = prevNode;
        return cur.value;
    }
    /**
     * Sequential list output from head to tail;
     */
    showList() {
        let cur = this.head;
        for (let i = 0; i < this.size; i++) {
            console.log(`[${i}] : ${cur.value}`);
            cur = cur.next;
        }
    }
    /**
     * Get node value by index in linked list
     * @param {number} index - index by which the cell will be found
     * @returns {number} - Node value
     */
    getAtIndex(index) {
        if (index > this.size) throw new Error("Index out of range list");
        let cur = this.head;
        for (let i = 0; i < index; i++)
            cur = cur.next;
        console.log(`[${index}] :`, cur.value);
        return cur.value;
    }
    /**
     * Reverse List nodes
     * From Head->Tail to Tail->head
     */
    reverse() {
        let cur = this.head;
        let prev = null;
        let saver;
        this.tail = cur;
        while (cur) {
            saver = cur.next; // save next node
            cur.next = prev; // change link cur.next to prev link
            prev = cur; // save cur node for next step
            cur = saver; // change cur node on saved node
        }
        this.head = prev;
    }
}