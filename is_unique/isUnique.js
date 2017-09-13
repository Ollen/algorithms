function isUnique(msg) {
    let hashTable = {};
    for (let i = 0; i < msg.length; i++) {
        let char = msg.charAt(i);
        if (!hashTable[char]) hashTable[char] = 0;
        hashTable[char]++;
        if (hashTable[char] > 1) return false;
    }
    return true;
}

console.log(isUnique('abcdefg'));
console.log(isUnique('abcdefdg'));
console.log(isUnique('fgsad24'));
console.log(isUnique('asdasd'));

