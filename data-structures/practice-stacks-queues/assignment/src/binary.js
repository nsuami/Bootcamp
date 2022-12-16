const Queue = require("./lib/queue");

function binary(max) {
  const queue = new Queue();
  queue.enqueue("1");
  const result = [];
  for (let i = 0; i < max; i++) {
    const dequeued = queue.dequeue();
    result.push(dequeued);
    const bin1 = dequeued + "0";
    const bin2 = dequeued + "1";
    queue.enqueue(bin1);
    queue.enqueue(bin2);
  }
  console.log(result);
  return result;
}
// [ '1', '10', '101', '100', '1001' ]
// ['1', '10', '11', '100', '101']
module.exports = binary;

// 1. Initialize an empty queue
// 2. Enqueue the string "1". This represents binary number 1.
// 3. Initialize an empty array named result
// 4. Iterate from 1 to max and do:
//     1. Dequeue a value from the queue
//     2. Push the value into result
//     3. Append a "0" to the value and enqueue it
//     4. Append a "1" to the value and enqueue it
// 5. return result
