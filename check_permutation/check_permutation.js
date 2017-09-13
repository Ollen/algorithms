/**
 * - Permuation is Case-Sensitive.
 */

/**
 * This solution will sort the both of the two strings.
 * Returns true if both are equal.
 * @param {String} a String where permuation is compared.
 * @param {String} b String to be compared.
 */
function permuation (a, b) {
    function sort (str) {
        return str.split('').sort().join('');
    }

    if (a.length != b.length) return false;
    if (sort(a) != sort(b)) return false;
    return true;
}

console.log(permuation('God', 'dog'));
console.log(permuation('god', 'dog'));


