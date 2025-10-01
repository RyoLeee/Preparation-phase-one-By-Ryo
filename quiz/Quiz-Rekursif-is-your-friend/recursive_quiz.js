// WELCOME

// QUIZ NUMNB 1
function angkaTerbesar(sentence) {
  if (sentence.length < 1) return -1;
  if (sentence.length === 1) return sentence[0];
  let remainder = angkaTerbesar(sentence.slice(1));
  return sentence[0] > remainder ? sentence[0] : remainder;
}

// TEST CASES
console.log(angkaTerbesar([2, 3, 7, 6, 5])); // 7
console.log(angkaTerbesar([9, 3, 7, 4, 1])); // 9
console.log(angkaTerbesar([2, 1, 7, 2, 8])); // 8
console.log(angkaTerbesar([])); // -1

console.log(" ");
console.log(" ");
console.log(" ");

// QUIZ NUMB 2
function changeXRecursive(data, jenis) {
  if (data.length < 1) return " ";

  let firstNumb = data[0];
  let number = Number(firstNumb);
  let result = firstNumb;
  if (jenis === "genap" && number % 2 === 0) {
    result = "x";
  } else if (jenis === "ganjil" && number % 2 !== 0) {
    result = "x";
  }
  return result + changeXRecursive(data.slice(1), jenis);
}

console.log(changeXRecursive("012345678922468", "ganjil")); //x1x3x5x7x9xxxxx
console.log(changeXRecursive("0123456789", "genap")); //

console.log(" ");
console.log(" ");
console.log(" ");

// QUIZ NUMB 3
function consonantCounterRecursive(sentences) {
  if (sentences.length < 1) return 0;
  let count = 0;
  let firstAvbt = sentences[0].toLowerCase();
  if (firstAvbt >= "a" && firstAvbt <= "z")
    if (
      firstAvbt === "a" ||
      firstAvbt === "i" ||
      firstAvbt === "u" ||
      firstAvbt === "e" ||
      firstAvbt === "o"
    ) {
      count += 0;
    } else {
      count += 1;
    }
  return count + consonantCounterRecursive(sentences.slice(1));
}

console.log(consonantCounterRecursive("alDi Suka MakAn baksO")); //10
console.log(consonantCounterRecursive("AziZy")); // 3
console.log(consonantCounterRecursive("awt6an")); // 3

console.log(" ");
console.log("  ");
console.log(" ");

// QUIZ NUMB 4
function dividableRecursive(array, num) {
  if (array.length < 1) return "";
  let firstNumb = array[0];
  let restResult = dividableRecursive(array.slice(1), num);
  if (firstNumb % num === 0) {
    return firstNumb + " " + restResult;
  } else {
    return restResult;
  }
}

// DRIVER CODE
console.log(dividableRecursive([66, 33, 55, 44, 11], 3)); // 66 33
console.log(dividableRecursive([123, 222, 100, 50, 32], 2)); // 222 100 50 32
console.log(dividableRecursive([125, 500, 201, 202, 66], 5)); // 125 500
console.log(dividableRecursive([66, 33, 55, 44, 132], 6)); // 66 132

console.log(" ");
console.log(" ");
console.log(" ");

// QUIZ NUMB 5
function hapusSimbolRec(str) {
  if (str.length < 1) return "";
  let firstIndex = str[0].charCodeAt();
  let restResult = hapusSimbolRec(str.slice(1));
  if (
    (firstIndex >= 48 && firstIndex <= 57) ||
    (firstIndex >= 65 && firstIndex <= 90) ||
    (firstIndex >= 97 && firstIndex <= 122)
  ) {
    return String.fromCharCode(firstIndex) + restResult;
  } else {
    return restResult;
  }
}

console.log(hapusSimbolRec("test4@aa")); //test4aa
console.log(hapusSimbolRec("devel0p3r s3j@@ati")); // devel0p3rs3jati
console.log(hapusSimbolRec("ma@#k!an~")); // makan
console.log(hapusSimbolRec("coding")); // coding
console.log(hapusSimbolRec("1+3-5*2=100")); // 1352100

console.log(" ");
console.log(" ");
console.log(" ");

// QUIZ NUMB 6
function palindromeRecursive(sentence) {
  sentence = sentence.replace(/\s/g, "");
  if (sentence.length < 1) return true;
  let firstAvbt = sentence[0];
  let lastAvbt = sentence[sentence.length - 1];
  if (firstAvbt !== lastAvbt) {
    return false;
  }

  return palindromeRecursive(sentence.slice(1, -1));
}

// TEST CASES
console.log(palindromeRecursive("katak")); // true
console.log(palindromeRecursive("blanket")); // false
console.log(palindromeRecursive("civic")); // true
console.log(palindromeRecursive("kasur rusak")); // true
console.log(palindromeRecursive("mister")); // false

console.log(" ");
console.log(" ");
console.log(" ");

// QUIZ NUMB 7
function parseNumber(equation) {
  equation = String(equation);
  if (equation.length <= 1) return "";
  let firstAvbt = equation[0];
  let zeros = equation.length - 1;
  let restResult = parseNumber(equation.slice(1));
  if (firstAvbt !== "0") {
    if (restResult) return firstAvbt + "0".repeat(zeros) + "+" + restResult;
    return firstAvbt + "0".repeat(zeros);
  } else {
    return restResult;
  }
}

console.log(parseNumber(3333)); // 3000+300+30+3  // 3000 + 300 + 30 + 3
console.log(parseNumber(90)); // 90
console.log(parseNumber(2333)); // 2000+300+30+3

console.log(" ");
console.log(" ");
console.log(" ");

// QUIZ NUMB 8
function piramid(n) {
  if (n === 0) return 0;
  return n + piramid(n - 1);
}

// console.log(piramid()) // 0
console.log(piramid(0)); // 0
console.log(piramid(1)); // 1
console.log(piramid(2)); // 3
console.log(piramid(3)); // 6
console.log(piramid(4)); // 10
console.log(piramid(5)); // 15
console.log(piramid(6)); // 21
console.log(piramid(100)); // 5050
console.log(piramid(888)); // 394716

console.log(" ");
console.log(" ");
console.log(" ");

// QUIZ NUMB 9
// Assisted by AI (ChatGPT)
function virusCheckRecursive(str, viruses) {
  if (!viruses) return "There is no Virus";
  if (str.length === 0) return 0;
  let regex = new RegExp(viruses, "i");
  if (regex.test(str[0])) {
    return 1 + virusCheckRecursive(str.slice(1), viruses);
  } else {
    return virusCheckRecursive(str.slice(1), viruses);
  }
}

console.log(virusCheckRecursive("qlD4MZax0raQqew", "x|0|q")); // 5
console.log(virusCheckRecursive("HH0NBP1zRa", "h|r")); // 3
console.log(virusCheckRecursive("4O4TmIF6ONaiMlzpXxPqwy", "4|X|p")); // 6
console.log(virusCheckRecursive("mjBgPlzks", "m")); // 1
console.log(virusCheckRecursive("AIn4Ks05bBaa", "x")); // 0
console.log(virusCheckRecursive("RsMFjBUjvIaP")); // There is no virus
console.log(virusCheckRecursive("")); // There is no virus

console.log(" ");
console.log(" ");
console.log(" ");

// QUIZ NUMB 10 (LAST QUIZ)
function numberIterator(num) {
  if (num === 0) return "0";
  return numberIterator(num - 1) + num;
}
console.log(numberIterator(5)); // '012345'
console.log(numberIterator(7)); // '01234567'
console.log(numberIterator(3)); // '0123'
console.log(numberIterator(1)); // '01'
console.log(numberIterator(0)); // '0'
