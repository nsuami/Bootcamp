/**
 * Node is used to store values in a LinkedList
 */
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

/**
 * LinkedList class holds a reference to the `head` node.
 */

class LinkedList {
  /**
   * The number of elements in the linked list.
   *
   * @returns {number}
   *   the number of elements in the linked list.
   */

  get length() {
    // the count of nodes to be returned
    let count = 0;
    // start at the head
    let node = this.head;
    while (node) {
      // if there is a node, count it
      count++;
      // iterate/traverse to the next
      node = node.next;
    }
    return count;
  }

  /**
   * Find a node in the linked list.
   *
   * @param isMatch
   *  function that returns true if the current node matches the search criteria.
   *
   * @returns {*|null}
   *  the first node where `isMatch(node, index) === true` or null if no match is found.
   */
  find(isMatch) {
    return this.findWithPrevious(isMatch)[0];
  }

  findWithPrevious(isMatch) {
    let index = 0;
    let previous = null;
    let node = this.head;

    while (node) {
      console.log("The index of ");
      console.log(node);
      console.log(`is ${index}`);
      if (isMatch(node, index, this)) {
        return [node, previous];
      }
      index++;
      previous = node;
      node = node.next;
    }
    return [null, null];
  }
  /**
   * Insert the value after a matched node in the list.
   *
   * @param isMatch
   *  function that returns true if the current node matches the search criteria.
   *
   * @param value
   *  the value to add.
   *
   * @returns {LinkedList}
   *  this linked list so methods can be chained.
   *
   * @throws 'No match found.'
   *  if list is not empty and no matching element is found.
   */
  // puts at the end of the linked list by default
  insert(value, isMatch = (node, index) => index === this.length - 1) {
    if (this.head) {
      const previousNode = this.find(isMatch);

      if (!previousNode) {
        throw new Error("No match found.");
      }

      previousNode.next = new Node(value, previousNode.next);
    } else {
      this.insertAtHead(value);
    }
    return this;
  }

  /**
   * Insert a new value at the head of the list.
   * @param value
   *  the new value to insert
   *
   * @returns {LinkedList}
   *  this linked list so methods can be chained.
   */

  insertAtHead(value) {
    // This is a new function that you will need to implement.
    this.head = new Node(value, this.head);
    return this;
  }

  /**
   * Remove the first node where `isMatch(node, index) === true`.
   *
   * @param isMatch
   *  function that returns true if the current node matches the node to be removed.
   *
   * @returns {LinkedList}
   *  this linked list so methods can be chained.
   */

  // before:
  //  {
  //   "head": {
  //     "value": 4,
  //     "next": {
  //       "value": 9,
  //       "next": {
  //         "value": 24,
  //         "next": null
  //       }
  //     }
  //   }
  // }
  // Matched node: { value: 9, next: Node { value: 24, next: null } }
  // node before that {
  //   value: 4,
  //   next: Node { value: 9, next: Node { value: 24, next: null } }
  // }
  // previousNode.next: { value: 9, next: Node { value: 24, next: null } }
  // is deleted and replaced with matchedNode.next: Node { value: 24, next: null }
  // after:
  // {
  //   "head": {
  //     "value": 4,
  //     "next": {
  //       "value": 24,
  //       "next": null
  //     }
  //   }
  // }
  remove(isMatch) {
    const [matchedNode, previousNode] = this.findWithPrevious(isMatch);
    console.log("Matched node:");
    console.log(matchedNode);
    console.log("node before that:");
    console.log(previousNode);

    if (!matchedNode) {
      return null;
    }
    if (this.head === matchedNode) {
      console.log("this.head:", this.head);
      console.log("becomes this.head.next:", this.head.next);
      this.head = this.head.next;
    } else {
      console.log("previousNode.next:", previousNode.next);
      console.log(
        "is deleted and replaced with matchedNode.next:",
        matchedNode.next
      );
      previousNode.next = matchedNode.next;
    }
    return matchedNode.value;
  }
}

module.exports = LinkedList;
