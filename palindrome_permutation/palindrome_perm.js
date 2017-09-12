function palindrom_perm(str) {
    let table = {};
    let countOdd = 0;
    str = str.split('');
    str.forEach(char => {
        if (!table[char]) table[char] = 0;
        table[char]++;
        table[char] % 2 == 1 ? countOdd++ : countOdd--;
    });
    return countOdd <= 1;
}

console.log(palindrom_perm('aaaa_tttt'));