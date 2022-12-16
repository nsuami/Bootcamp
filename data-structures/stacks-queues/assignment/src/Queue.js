class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(value) {
    // your solution here
    let newNode = new Node(value);
    // if the
    if (this.first) {
      this.last.next = newNode;
    } else {
      this.first = newNode;
    }
    this.last = newNode;
    return this;
  }

  dequeue() {
    // your solution here
    if (this.first) {
      //> falsy
      // make a pointer to original first
      let dequeued = this.first;
      // dequeue the item and move this.first to next in line
      this.first = dequeued.next;
      if (dequeued.value === this.last.value) {
        // set last to null if the node dequeued is the last node
        this.last = null;
      }
      console.log(dequeued);
      // Node {
      //   value: 'apple',
      //   next: Node {
      //     value: 'orange',
      //     next: Node { value: 'banana', next: [Node] }
      //   }
      // }
      console.log(dequeued.value); //> 'apple'

      return dequeued.value; //> 'apple'
    }
  }
  // dequeue //> null
}

module.exports = Queue;
