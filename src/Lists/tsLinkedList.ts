/**
 * Нода списка
 */
class LinkedListNode {
  val: number;
  next: null | LinkedListNode;

  /**
   * Создание новой ноды
   * @param _val - значение ноды
   * @param _next - ссылка на след. ноду
   */
  constructor(_val: number, _next?: null | LinkedListNode) {
    this.val = _val;
    this.next = _next ? _next : null;
  }
}

/**
 * Linked List
 */
class MyLinkedList {
  private size: number;
  private head: null | LinkedListNode;

  constructor() {
    this.size = 0;
    this.head = null;
  }

  /**
   * add new node in List
   * @param _val value for new Node
   * @returns
   */
  addAtTail(_val: number): void {
    const newNode: LinkedListNode = new LinkedListNode(_val);

    if (this.size === 0) {
      this.head = newNode;
      this.size++;
      return;
    }
    let cur: LinkedListNode = this.head;

    while (cur.next) {
      cur = cur.next;
    }

    cur.next = newNode;
    this.size++;
  }

  /**
   * Add value in List from head
   * @param _val value for new Node
   * @returns
   */
  addAtHead(_val: number): void {
    const newNode: LinkedListNode = new LinkedListNode(_val);

    if (this.size === 0) {
      this.head = newNode;
      this.size++;
      return;
    }

    const savedNode: LinkedListNode = this.head;
    this.head = newNode;
    this.head.next = savedNode;
    this.size++;
  }

  addAtIndex(index: number, val: number): void {
    if (index < 0 || index >= this.size + 1) {
      return;
    }
    const newNode: LinkedListNode = new LinkedListNode(val);

    if (this.size === 0) {
      this.head = newNode;
      this.size++;
      return;
    }

    if (index === 0 && this.size === 1) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let cur: LinkedListNode = this.head;
    let prev: LinkedListNode = cur;
    let curIndex: number = 0;

    while (curIndex !== index && cur) {
      prev = cur;
      cur = cur.next;
      curIndex++;

      if (curIndex === index) {
        break
      }
    }

    if (curIndex === index) {
      prev.next = newNode;
      newNode.next = cur;
      this.size++;
    } else {
      return;
    }
  }

  /**
   * Get values from linked list
   * @returns null
   */
  print(): void {
    if (this.size === 0) {
      console.log("empty");
      return;
    }

    let cur: LinkedListNode = this.head;

    while (cur) {
      console.log(cur?.val);
      cur = cur.next;
    }

    return null;
  }

  /**
   * Find and remove value from List
   * @param _val value of node for remove
   * @returns {void}
   */
  removeAtVal(_val: number): void {
    if (!_val || this.size === 0) {
      return;
    }

    if (this.head.val === _val) {
      this.head = this.head.next;
      return;
    }
    let flag: boolean = false;
    let cur: LinkedListNode = this.head;
    let prev: LinkedListNode = cur;

    while (cur.val !== _val && cur) {
      prev = cur;
      cur = cur.next;

      if (cur?.val === _val) {
        flag = true;
      }
    }

    if (flag) {
      prev.next = cur.next;
      this.size--;
    } else {
      return;
    }
  }

  deleteAtIndex(index: number): void {
    if (this.size === 0 || index < 0 || index >= this.size) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    if (index === 0 && this.size === 1) {
      this.head = null;
      this.size--;
      return;
    }

    let cur: LinkedListNode = this.head;
    let prev: LinkedListNode = cur;
    let curIndex: number = 0;

    while (index !== curIndex && cur) {
      prev = cur;
      cur = cur.next;
      curIndex++;

      if (index === curIndex) {
        break;
      }
    }

    if (index === curIndex) {
      prev.next = cur.next;
      this.size--;
    } else {
      return;
    }
  }

  /**
   * Check contains node in list or not
   * @param _val Node for check
   * @returns {boolean}
   */
  has(_val: number): boolean {
    if (!_val || this.size === 0) {
      return false;
    }
    let cur = this.head;

    while (cur) {
      if (cur.val === _val) {
        return true;
      }
      cur = cur.next;
    }

    return false;
  }

  /**
   * get value from node if we can found it
   * @param index node index
   * @returns {number} val of founded node
   */
  get(index: number): number {
    if (this.size === 0) {
      return -1;
    }
    let cur = this.head;
    let curIndex: number = 0;

    while (cur) {
      if (curIndex === index) {
        return cur.val;
      }
      curIndex++;
      cur = cur.next;
    }

    return -1;
  }
}

// ["MyLinkedList","addAtHead","addAtIndex","get"]
// [[],[2],[0,1],[1]]

const myLinkedList = new MyLinkedList();
myLinkedList.addAtHead(2);
myLinkedList.addAtIndex(0,1);
myLinkedList.print();
console.log(myLinkedList.get(1));