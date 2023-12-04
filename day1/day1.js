"use strict";
/*Input data */
import { input } from "./input.js";
const inputDemo = `
1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`;

/*Main solution for Demo*/
const demoArrayData = dataToArray(inputDemo);
const demoAarrNumbers = toNumbsArray(demoArrayData);
const demoResult = sumArrayNumbers(demoAarrNumbers);
export { demoResult };

/**Main solution for the real input */
const arrayData = dataToArray(input);
const arrNumbers = toNumbsArray(arrayData);
const result = sumArrayNumbers(arrNumbers);
export { result };

/*Functions to do it */

/** Function for cleaning the input data,
 * returning a 2D array with each letter splitted*/
function dataToArray(dataInput) {
  const array = dataInput.split("\n");
  return array.filter(line => line.length)
              .map(line => line.trim()
                  .split(""));
}

/** Function to get the two hidden numbers in the String */
function getStringNumber(line) {
  const first = findNumber();
  line.reverse();
  const second = findNumber();
  return first + "" + second;

  /**Sub-Function for finding the number */
  function findNumber() {
    return line.find(char => {
      if(!isNaN(Number(char))) return char;
    });
  }
}

/**Function to convert the string array into the number array */
function toNumbsArray(falseNumbArrays) {
  return falseNumbArrays.map(line => Number(getStringNumber(line)));
}

/**Function for the add solution for the expected output */
function sumArrayNumbers(arrNumbers) {
  return arrNumbers.reduce((acc, v) => acc + v);
}