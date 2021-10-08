/**
 * Нода списка
 */
class ListNode {
  val: any;
  next: null | ListNode;

  /**
   * Создание новой ноды
   * @param _val - значение ноды
   * @param _next - ссылка на след. ноду
   */
  constructor(_val: any, _next?: null | ListNode) {
    this.val = _val;
    this.next = _next ? _next : null;
  }
}

/**
 * Linked List
 */
class TsList {
  private size: number;
  private head: null | ListNode;

  constructor() {
    this.size = 0;
    head: null;
  }

  /**
   * add new node in List
   * @param _val value for new Node
   * @returns
   */
  addInTail(_val: any): void {
    const newNode: ListNode = new ListNode(_val);

    if (this.size === 0) {
      this.head = newNode;
      this.size++;
      return;
    }
    let cur: ListNode = this.head;

    while (cur.next) {
      cur = cur.next;
    }

    cur.next = newNode;
    this.size++;
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

    let cur: ListNode = this.head;

    while (cur) {
      console.log(cur?.val);
      cur = cur.next;
    }

    return null;
  }

  /**
   * Add value in List from head
   * @param _val value for new Node
   * @returns
   */
  addInHead(_val: any) {
    const newNode: ListNode = new ListNode(_val);

    if (this.size === 0) {
      this.head = newNode;
      this.size++;
      return;
    }

    const savedNode: ListNode = this.head;
    this.head = newNode;
    this.head.next = savedNode;
    this.size++;
  }

  /**
   * Find and remove value from List
   * @param _val value of node for remove
   * @returns {null | number} - returns -1 if node not found
   */
  remove(_val: any) {
    if (!_val) {
      return -1;
    }
    let flag: boolean = false;
    let cur: ListNode = this.head;
    let prev: ListNode = cur;

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
      return -1;
    }
  }

  /**
   * Check contains node in list or not
   * @param _val Node for check
   * @returns {boolean}
   */
  has(_val: any) {
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
}

const tsList: TsList = new TsList();
tsList.addInTail(2);
tsList.addInTail(1);
tsList.addInHead(3);
tsList.remove(2);
tsList.has(2);
tsList.has(1);