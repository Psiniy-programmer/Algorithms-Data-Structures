import LinkedList from './Lists/LinkedList';
import DoublyLinkedList from './Lists/DoublyLinkedList';
import Queue from './Queue/Queue';

const queue = new Queue();
queue.insert(2);
queue.insert(3);
queue.show();
console.log(queue.removeFront())
queue.show();
queue.clear();
queue.removeFront();
queue.show();
// const secList = new DoublyLinkedList();
// secList.insertFirst(99);
// secList.insertLast(0);
// secList.insertAtIndex(1, 50);
// secList.insertFirst(22);
// secList.showListFromHead();
// secList.reverse();
// console.log('reverse')
// secList.showListFromHead();
// secList.getHead();
// secList.getTail();

// const List = new LinkedList();
// List.insertFirst(1);
// List.insertFirst(2);
// List.insertFirst(3);
// List.insertFirst(4);
// List.insertFirst(5);
// List.insertAtIndex(0, 10);
// List.showList();
// List.reverse();