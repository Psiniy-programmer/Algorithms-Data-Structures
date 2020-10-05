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
     * Checking whether the list is empty
     * @return {boolean}
     */
    isEmpty() {
        return !this.size ? true : false;
    }
    /**
     * @return {number} - Size of LinkedList
     */
    getSize() {
        return this.size;
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
}