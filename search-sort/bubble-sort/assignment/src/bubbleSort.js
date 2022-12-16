function bubbleSort(compare, elements) {
  if (Array.isArray(elements)) {
    let inOrder;

    do {
      inOrder = true;

      for (let index = 0, length = elements.length - 1; index < length; index++) {
        const leftElement = elements[index];
        const rightElement = elements[index + 1];

        if (compare(leftElement, rightElement) > 0) {
          elements[index] = rightElement;
          elements[index + 1] = leftElement;
          inOrder = false;
        }
      }
    } while (inOrder === false);
  }
  return elements;
}

module.exports = bubbleSort;
