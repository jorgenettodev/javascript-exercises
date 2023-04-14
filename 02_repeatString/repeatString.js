const repeatString = function(string, num) {
    //input: string, num
    // stringStringString
    let result = "";
    if( num < 0) {
        return "ERROR";
    }
    for(let i = 0; i < num; i++) {
        
        result = result + string;
    }
    return result;
};


// make a function that returns a string "hey" 3 times. repeatString("hey", 3)
// Do not edit below this line
module.exports = repeatString;
