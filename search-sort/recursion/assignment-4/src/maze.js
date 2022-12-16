/**
 * Return a string representing the path through the maze.
 * @param {array} maze
 * @param {array} index The starting point
 */
function mazeSolver(maze, index = [0, 0]) {
  const val = maze[index[0]][index[1]];
  if (val === "e") {
    return "";
  }
  //   let maze = [
  //     [' ', ' ', ' ', '*', ' ', ' ', ' '], //0
  //     ['*', '*', ' ', '*', ' ', '*', ' '], //1
  //     [' ', ' ', ' ', ' ', ' ', ' ', ' '], //2
  //     [' ', '*', '*', '*', '*', '*', ' '], //3
  //     [' ', ' ', ' ', ' ', ' ', ' ', 'e'] //4
  // ];
  const yLength = maze.length;
  const xLength = maze[index[0]].length;

  // check whether these variables will exist. if there is anything there
  //   let up, down, left, right;
  const currentY = index[0];
  const currentX = index[1];
  let path = "";
  // can I go in each direction?
  // is e in the up, down, left, or right direction?
  if (currentX + 1 < xLength && maze[currentY][currentX + 1] !== "*") {
    path += "R";
    index[1] += 1;
    return path + mazeSolver(maze, index);
  }

  if (currentY + 1 < yLength && maze[currentY + 1][currentX] !== "*") {
    path += "D";
    index[0] += 1;
    return path + mazeSolver(maze, index);
  }

  return "";
}

module.exports = mazeSolver;

function toBinary(num, n = Math.floor(Math.log2(num))) {
  if (n === -1) return "";
  return num - Math.pow(2, n) >= 0
    ? "1" + toBinary(num - Math.pow(2, n), n - 1)
    : "0" + toBinary(num, n - 1);
}

toBinary(17);

// 1 2 4 8 16 32
// 1 2 3 4 5  6

// 17 - 2^4 * 1 = 1
// 1 - 2^3 * 0 = 1
// 1 - 2^2 * 0 = 1
// 1 - 2^1 * 0 = 1
// 1 - 2^0 * 1 = 0
// 10001

// return Math.pow(2, n) * num[num.length - n] + fromBinary(num, n-1)

function fromBinary(num, n = num.length - 1) {
  if (n === -1) return 0;
  return 2 ** n * num[num.length - (n + 1)] + fromBinary(num, n - 1);
}

fromBinary(toBinary(17));

module.exports = mazeSolver;
