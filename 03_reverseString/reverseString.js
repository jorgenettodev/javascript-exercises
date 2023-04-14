const reverseString = function(string) {
    let arr = string.split("");
    arr.reverse();
    let newString = arr.join("");
    return newString;
};

// write a function that: take a string as input and return the same string, but reversed, 
// OUTPUT: for instance: "ABC" == "CBA"
// Processing: Take the string and turn it into an array.
// then take firstArray = ["A","B","C"] and write a secondArray, passing always the LAST ELEMENT of the first array.
// secondArray = firstArray[lastElement].push();
// 
// When there is no more elements, then .join(",") the secondArray into a string
// return the string.

// Do not edit below this line
module.exports = reverseString;
