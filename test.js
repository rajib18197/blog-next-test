const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const findAllMoves = function (r) {
  let all = [];
  for (let test = 0; test < r.length; test++) {
    const [l, n] = r[test].split("");
    // const arr = [];
    const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
    for (let i = 1; i <= 8; i++) {
      const word = l + i;
      if (word !== r[test]) {
        console.log(word);
      }
    }

    for (let i = 1; i <= 8; i++) {
      const word = letters[i - 1] + i;
      if (word !== r[test]) {
        console.log(word);
      }
    }

    // console.log(arr);
    // all.push(arr);
  }
  return all;
};

let testCases = [];

rl.question("Enter the number of test cases (t): ", (t) => {
  const numberOfTestCases = parseInt(t);
  askForPositions(numberOfTestCases);
});

function askForPositions(numberOfTestCases) {
  if (numberOfTestCases > 0) {
    rl.question(
      `Enter the position for test case ${testCases.length + 1}: `,
      (position) => {
        testCases.push(position);
        askForPositions(numberOfTestCases - 1);
      }
    );
  } else {
    rl.close();
    findAllMoves(testCases);
  }
}

// findAllMoves("d5");
