function oneAway(x, y) {
    let lengthDiff = Math.abs(x.length - y.length);
    if (lengthDiff > 1) {
        return false;
    }

    let s1 = x.length < y.length ? y : x; // Long
    let s2 = x.length < y.length ? x : y; // Short
    let index1 = 0;
    let index2 = 0;

    let diff = false;

    while(index1 < s1.length && index2 < s2.length) {
        if (s1.charAt(index1) != s2.charAt(index2)) {
            if (diff) {
                return false;
            }
            if (s1.length == s2.length) {
                index2++;
            }
            diff =  true;
        } else {
            index2++;
        }
        index1++;
    }

    return true;
}

console.log(oneAway('pale', 'tale')); // true
console.log(oneAway('taco', 'tco')); // true
console.log(oneAway('taco', 'taco')); // true
console.log(oneAway('taco', 'tacos')); // true
console.log(oneAway('chair', 'hair')); // true
console.log(oneAway('taco', 'tacoaa')); // false
console.log(oneAway('doggy', 'dog')); // false
console.log(oneAway('cat', 'bar')); // false
console.log(oneAway('cate', 'batr')); // false







