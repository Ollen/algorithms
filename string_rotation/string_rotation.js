function isRotation(s1, s2) {
    let len = s1.length;
    if (len === s2.length && len > 0) {
        let s1s1 = s1 + s1;
        return s1s1.includes(s2);
    }
    return false;
}

console.log(isRotation('power', 'erpow'));
console.log(isRotation('calendar', 'ndarcale'));
console.log(isRotation('waterbottle', 'ttlewaterbo'));