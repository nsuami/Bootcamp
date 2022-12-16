function cycle(list) {
  let fast = list.head;
  let slow = list.head;
  while (fast && fast.next) {
    // [1] => [3] => [5] => [6] => [8] => [10] => [11] => [1]
    fast = fast.next.next;
    slow = slow.next;
    if (fast.value === slow.value) {
      return true;
    }
  }
  return false;
}

module.exports = cycle;
