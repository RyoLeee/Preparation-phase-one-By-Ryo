// WELCOME

// PART 1 QUIZ
function missingNum(arr) {
  if (arr.length < 1) return [];

  let realNumb = [];
  for (let i = 0; i < arr.length; i++) {
    let arrLine = arr[i];
    for (let j = 0; j < arrLine.length; j++) {
      if (arrLine[j] !== " ") realNumb.push(arrLine[j]);
    }
  }
  let minNumb = Math.min(...realNumb);
  let maxNumb = Math.max(...realNumb);

  let result = [];
  for (let k = minNumb; k <= maxNumb; k++) {
    if (!realNumb.includes(k)) {
      result.push(k);
    }
  }
  return result;
}

console.log(
  missingNum([
    [3, " ", 5],
    [1, " ", 7],
    [9, " ", " "],
  ])
); // [ 2, 4, 6, 8 ]
console.log(
  missingNum([
    [2, " "],
    [" ", 5],
  ])
); // [ 3, 4 ]
console.log(
  missingNum([
    [11, " ", 13],
    [17, " ", 19],
    [" ", 16, " "],
  ])
); // [ 12, 14, 15, 18 ]
console.log(
  missingNum([
    [3, " ", 5, 15],
    [1, " ", 7, 13],
    [9, " ", " ", 12],
    [" ", 16, " ", " "],
  ])
); // [ 2, 4, 6, 8, 10, 11, 14 ]
console.log(missingNum([])); // []

console.log(" ");
console.log(" ");
console.log(" ");

// PART 2 QUIZ
function squareNumber(num) {
  if (num < 3) return "Minimal length 3";
  let result = [];
  for (let i = 0; i < num; i++) {
    let line = [];
    for (let j = 0; j < num; j++) {
      if ((i + j) % 4 === 0) {
        line.push("#");
      } else if ((i + j) % 2 === 0) {
        line.push("o");
      } else {
        line.push("x");
      }
    }
    result.push(line);
  }
  return result;
}

console.log(squareNumber(3));
// [ [x, o, x],  [o, x, #], [x, #, x] ]

console.log(squareNumber(4));
// [ [ x, o, x, # ],
//   [ #, x, o, x ],
//   [ x, o, x, # ],
//   [ #, x, o, x ] ]

console.log(squareNumber(5));
// [
//   [ x, o, x, #, x ],
//   [ o, x, #, x, o ],
//   [ x, o, x, #, x ],
//   [ #, x, o, x, # ],
//   [ x, o, x, #, x ]
// ]

console.log("");
console.log("");
console.log("");

// PART 3 QUIZ
function squareNumber(num) {
  if (num < 3) return "Minimal input adalah 3";
  let result = [];
  let numb = 1;
  for (let i = 0; i < num; i++) {
    let line = [];
    for (let j = 1; j <= num; j++) {
      line.push(numb);
      numb++;
    }

    if (i % 2 === 1) {
      line.reverse();
    }
    result.push(line);
  }
  return result;
}

console.log(squareNumber(3));
// [ [ 7, 8, 9 ], [ 6, 5, 4 ], [ 1, 2, 3 ] ]

console.log(squareNumber(4));
// [ [ 16, 15, 14, 13 ],
//   [ 9, 10, 11, 12 ],
//   [ 8, 7, 6, 5 ],
//   [ 1, 2, 3, 4 ] ]

console.log(squareNumber(5));
// [ [ 21, 22, 23, 24, 25 ],
//   [ 20, 19, 18, 17, 16 ],
//   [ 11, 12, 13, 14, 15 ],
//   [ 10, 9, 8, 7, 6 ],
//   [ 1, 2, 3, 4, 5 ] ]

console.log(squareNumber(2)); // Minimal input adalah 3
