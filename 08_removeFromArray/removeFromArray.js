const removeFromArray = function(A, ...args) {
    const result = [];
    for (let i = 0; i < A.length; i++) {
        if (!args.includes(A[i])) {
            result.push(A[i]);
        }
    }
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
