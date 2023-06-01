const fibonacci = function(n) {
    
    if (n <= 1) {
        return n;
    }

    let n1 = 0;
    let n2 = 1;
    

    for (let i = 2; i <= n; i++){
        let nextNumber = n2 + n1;
        n1 = n2;
        n2 = nextNumber;
    }
    return n2;

};

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(5));
console.log(fibonacci(10));

// Do not edit below this line
module.exports = fibonacci;
