const LinkedList = require("./classLinkedList");

function main() {
  const linkedList = new LinkedList();
  linkedList.insert("One");
  linkedList.insert(2);
  console.log(linkedList);
  linkedList.find((node) => node.value === "One").value = 1;
  console.log(linkedList);
}

main();
