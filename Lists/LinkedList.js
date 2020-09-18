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

class LinkedList {
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
        let i = 0;
        let temp;

        while (cur) {
            if (i + 1 === index) {
                temp = cur.next;
                cur.next = new Node(value, temp);
                break;
            }
            cur = cur.next;
            i++;
        }
        this.size++;
    }
    /**
     * Removing elemet at index from linked list
     * @param {number} index - the index by which you want to delete the node
     * @returns {Node} removed node
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
        return cur.value;
    }
    /**
     * Sequential list output from head to tail;
     */
    showList() {
        let cur = this.head;
        for (let i = 0; i < this.size; i++) {
            console.log(`[${i}] = ${cur.value}`);
            cur = cur.next;
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
     * Get node value by index in linked list
     * @param {number} index - index by which the cell will be found
     * @returns {number} - Node value
     */
    getAtIndex(index) {
        let cur = this.head;

        for (let i = 0; i < this.size; i++) {
            if (i === index) {
                console.log(cur.value);
                return cur.value;
            }
            cur = cur.next;
        }
        throw Error("Node not found in linked list");
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

const List = new LinkedList();
List.insertFirst(10);
List.insertFirst(20);
List.insertLast(100);
List.insertFirst(999);
// List.getTail();
List.insertAtIndex(3, 5);
// List.insertAtIndex(7,99);
List.showList();
console.log("KEK")
console.log("node : ", List.removeAtIndex(2));
List.removeAtIndex(2);
List.showList();
List.clearList();