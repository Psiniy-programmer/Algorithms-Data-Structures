import LinkedList from './Lists/LinkedList';
import DoublyLinkedList from './Lists/DoublyLinkedList';
import Queue from './Queue/Queue';

// const queue = new Queue();
// queue.insert(2);
// queue.insert(3);
// queue.show();
// console.log(queue.removeFront())
// queue.show();
// queue.clear();
// queue.removeFront();
// queue.show();

const secList = new DoublyLinkedList();
secList.insertFirst(99);
secList.insertFirst(20);
secList.insertFirst(10);
secList.insertFirst(40);
secList.insertFirst(30);
secList.showListFromHead();
console.log('teests');
secList.getAtIndex(3);
// const List = new LinkedList();
// List.insertFirst(1);
// List.insertFirst(2);
// List.insertFirst(3);
// List.insertFirst(4);
// List.insertFirst(5);
// List.insertAtIndex(0, 10);
// List.reverse();
// List.showList();
// List.getHead();
// List.getAtIndex(3);