class TNode {
  val: number[];

  constructor(_key: number, _val: number) {
    this.val = [_key, _val];
  }
}

class MyHashMap {
  size: number;
  items: TNode[];
  constructor() {
    this.size = 0;
    this.items = [];
  }

  put(key: number, value: number): void {
    const newTNode = new TNode(key, value);

    if (this.size === 0) {
      this.items.push(newTNode);
      this.size++;
      return;
    }
    let isContains: boolean = false;
    let containIndex: null | number = 0;

    this.items.forEach((item, i) => {
      if (item.val[0] === key) {
        console.log("contains");
        isContains = true;
        containIndex = i;
      }
    });

    if (isContains) {
      this.items[containIndex] = newTNode;
    } else {
      this.items.push(newTNode);
      this.size++;
    }
  }

  get(key: number): number {
    let res: number = -1;
    this.items.some((item) => {
      // console.log('cur item >> ', item.val, item.val[0], key);
      if (item.val[0] === key) {
        res = item.val[1];
      }
    });

    return res;
  }

  remove(key: number): void {
    this.items.some((item, i) => {
      if (item.val[0] === key) {
        const fHalf: TNode[] = this.items.slice(0, i);
        const sHalf: TNode[] = this.items.slice(i + 1);

        this.items = [...fHalf, ...sHalf];
        this.size--;
      }
    });
  }
}
