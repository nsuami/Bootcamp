/**
 * Implement a Stack using nothing more than a LinkedList.
 */

const LinkedList = require("../linked-list/linkedList");

class Stack {
  constructor() {
    this.linkedList = new LinkedList();
  }

  push(value) {
    this.linkedList.insertAtHead(value);
    return this;
  }

  pop() {
    const popped = this.linkedList.head;
    this.linkedList.remove((node) => node.value === popped.value);
    return popped.value;
  }

  peek() {
    return this.linkedList.head.value;
  }

  isEmpty() {
    return this.linkedList.head === null;
  }
}

module.exports = Stack;
