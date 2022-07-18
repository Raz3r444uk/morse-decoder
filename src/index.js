const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let newArr = [];
  let arr = expr.split("");

  let arrNumbs = [];
  for (let i = 0; i < arr.length; ) {
    newArr.push(arr.slice(i, i + 10));
    i += 10;
  }

  newArr.forEach((el) => {
    arrNumbs.push(el.join(""));
  });

  let arrJobe = [];
  newArr.forEach((el) => {
    arrJobe.push(el.join(""));
  });

  console.log(arrJobe);

  let resultArrNumb = [];

  for (let i = 0; i < arrJobe.length; i++) {
    for (let j = 0; j <= arrJobe[i].length; j++) {
      if (arrJobe[i][j] + arrJobe[i][j + 1] === "10") {
        resultArrNumb.push(".");
        j++;
      } else if (arrJobe[i][j] + arrJobe[i][j + 1] === "11") {
        resultArrNumb.push("-");
        j++;
      } else if (arrJobe[i][j] + arrJobe[i][j + 1] === "**") {
        j + 9;
        resultArrNumb.push(" ");
      } else if (j % 10 === 0 && j != 0) {
        resultArrNumb.push(" ");
        j++;
      } else {
        j++;
      }
    }
  }

  let arrOfSymbols = resultArrNumb
    .slice(0, resultArrNumb.length - 1)
    .join("")
    .split(" ");

  console.log(arrOfSymbols);
  let str = "";

  arrOfSymbols.forEach((el) => {
    if (el === "") {
      str += " ";
    } else if (el === " ") {
      str += " ";
    } else {
      str += MORSE_TABLE[el];
    }
  });

  return str.replaceAll("         ", " ");
}

module.exports = {
  decode,
};
