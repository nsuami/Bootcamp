const LinkedList = require("./linkedList");

const linkedList = new LinkedList();
linkedList.insert(4);
linkedList.insert(9);
linkedList.insert(24);
console.log(JSON.stringify(linkedList, null, 2));
// linkedList.insert(20, (node, index) => index === 1);
linkedList.insert(20, (node) => node.value === 9);
// linkedList.remove((node) => node.value === 9);
// console.log("\n___________\nFIND\n___________\n");
// console.log(linkedList.find((node, index) => index === 2));
// linkedList.remove((node, index) => index === 1);

console.log(JSON.stringify(linkedList, null, 2));
