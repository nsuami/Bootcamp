class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    // your solution here
    // create new Node
    // push new node to stack and point new node next to old top
    this.top = new Node(value, this.top);
    return this;
  }

  pop() {
    if (this.top) {
      const popped = this.top;
      this.top = this.top.next;
      return popped.value;
    } else {
      console.log("There is nothing in the stack");
    }
  }
}

module.exports = Stack;
