const palindromes = function (string) {

    string = string.replace(/[^a-zA-Z]/g, '');
    

    const reverseString = [...string].reverse().join("");
    if (string.toLowerCase() == reverseString.toLowerCase()) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
