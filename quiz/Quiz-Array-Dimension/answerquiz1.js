// QUIZ NO 1
function doubleReverse(arr) {
  if (arr.length < 1) return "Invalid input parameter";
  let newArr = [...arr];
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i].length % 2 === 0) {
      let word = newArr[i].split("");
      newArr[i] = word.reduce((acc, ch) => [ch, ...acc], []).join("");
    }
  }
  const result = newArr.reduce((fw, sw) => [sw, ...fw], []);
  return result;
}

console.log(doubleReverse(["rabu", "cinta", "benci", "masuk", "nikmat"]));
// [ 'tamkin', 'masuk', 'benci', 'cinta', 'ubar' ]
console.log(doubleReverse(["aku", "sayang", "kamu"]));
// [ 'umak', 'gnayas', 'aku' ]
console.log(doubleReverse(["pelakor", "perusak", "rumah", "tangga"]));
//[ 'anggnat', 'rumah', 'perusak', 'pelakor' ]
console.log(doubleReverse([]));
// invalid input parameter

console.log("");
console.log("");
console.log("");

// QUIZ NO 2
function findNotRelative(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    let pembanding = [...arr2];
    if (!arr2.includes(arr1[i])) {
      result.push(arr1[i]);
    }
  }
  return result;
}

console.log(findNotRelative([3, 6, 10, 12, 15], [1, 3, 5, 10, 16])); // [ 6, 12, 15]
console.log(findNotRelative([10, 20, 36, 59], [5, 10, 15, 59])); //[20, 36]
console.log(findNotRelative([1, 2, 3], [2, 1, 3])); //[]

console.log("");
console.log("");
console.log("");

// QUIZ NO 3
function minDistanceBetweenGreatest(arr) {
  const higher = Math.max(...arr);
  let prev = -1;
  let lower = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === higher) {
      if (prev !== -1) lower = Math.min(lower, i - prev);
      prev = i;
    }
  }
  return lower === Infinity ? 0 : lower;
}

console.log(minDistanceBetweenGreatest([3, 5, 2, 3, 5, 3, 5])); //2
console.log(minDistanceBetweenGreatest([1, 1, 1, 1, 1, 1])); //1
console.log(minDistanceBetweenGreatest([7, 8, 5, 2, 1, 1])); //

console.log("");
console.log("");
console.log("");

// QUIZ NO 4
function averageLengthWord(words) {
  let result = [];
  let array = words.split(" ");
  let totalL = array.reduce((sum, str) => sum + str.length, 0);
  let avarage = Math.round(totalL / array.length);
  for (let i = 0; i < array.length; i++) {
    if (array[i].length === avarage) result.push(array[i]);
  }
  return result;
}

console.log(averageLengthWord("Do you want to become a great coder ?")); // ['you']
console.log(
  averageLengthWord("You dont know what you have until you lose it!")
); // [ 'dont','know','what','have','lose']
console.log(averageLengthWord("I am diligent")); // []
