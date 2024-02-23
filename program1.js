/**
 * @param {string} s
 * @return {boolean}
 */

   var isValid = function(s) {
    const stack = [];
    const pairs = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char in pairs) {
            stack.push(char);
        } else {
            const top = stack.pop();
            if (!top || pairs[top] !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
};

module.exports = { isValid };

console.log(isValid("()")); 
console.log(isValid("()[]{}")); 
console.log(isValid("(]"));



