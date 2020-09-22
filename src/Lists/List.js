export default class List {
    /**
     * Create new empty List 
     */
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    /**
     * Delete all nodes of linked list
     */
    clearList() {
        this.size = 0;
        this.head = null;
        this.tail = null;
    }
    /**
     * Get the value of the tail of the list
     * @returns {number} - Linked list tail value
     */
    getTail() {
        console.log(`[tail] :`, this.tail.value);
        return this.tail.value;
    }
    /**
     * Get the value of the head of the list
     * @returns {number} - Linked list head value
     */
    getHead() {
        console.log(`[head] :`, this.head.value);
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
                console.log(`[${index}] :`, cur.value);
                return cur.value;
            }
            cur = cur.next;
        }
        throw Error("Node not found in linked list");
    }
}