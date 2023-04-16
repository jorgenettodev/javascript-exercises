const sumAll = function(a, b) {
    let result = 0;

    

    if (a < 0 || b < 0) {
        return "ERROR";
    }
    if (a == null || b == null) {
        return "ERROR";
    }

    
    
    
    if (a < b) {
        for (let i = a; i <= b; i++) {
            result += i;
        }

    } else if (a > b) {
        for (let i = b; i <= a; i++) {
            result += i ;
        }
        
    }
    if (typeof a !== "number" || typeof b !== "number" ) {
        return "ERROR";
    }
    
    return result;

};

// Do not edit below this line
module.exports = sumAll;
