const palindromes = function (s) {
    for(let i = 0, j = s.length - 1; i < j; i++, j--) {
        if (s[i] !== s[j]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
