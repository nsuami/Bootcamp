/**
 * Remove duplicate values, if any, from a sorted linked list.
 *
 * The algorithm should be O(n) time complexity, therefore it cannot use `find()`.
 *
 * @param sortedLinkedList
 *  a possibly empty link list with all values in lexical order.
 *
 * @returns {LinkedList}
 *  the original linked list with any duplicate values removed.
 */

function removeDuplicates(list) {
  // make empty obj to store duplicates
  // traverse through list, check against obj, store node value in obj
  // if the value is in the obj, set to be removed
  // else traverse
  const existingNodes = {};
  let node = null;

  if (list.head) {
    node = list.head;
  }

  while (node) {
    if (existingNodes[node.value]) {
      list.remove((ele) => ele.value === node.value);
    } else {
      existingNodes[node.value] = 1;
    }
    node = node.next;
  }

  return list;
}

module.exports = removeDuplicates;
// while (node) {
//   if (existingNodes[node.value]) {
//     existingNodes[node.value]++;
//   } else {
//     existingNodes[node.value] = 1;
//   }

//   if (existingNodes[node.value] > 1) {
//     list.remove((ele) => ele.value === node.value);
//   }

//   node = node.next;
// }
