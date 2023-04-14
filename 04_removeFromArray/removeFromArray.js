const removeFromArray = function(array, ...args) {
    
    array.forEach(element => {
        for (const arg of args) {
            if (array.includes(arg)) {
                array.splice(array.indexOf(arg),1);
            }
            continue;
        }
    });

    return array;
};

console.log(removeFromArray([1,2,3,4,"netto"],"netto",3));

// Do not edit below this line
module.exports = removeFromArray;
