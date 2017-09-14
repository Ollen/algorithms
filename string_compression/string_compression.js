function compress_string_1(str) {
    let res = '';
    let charCount = 0;
    
    for(let i = 0; i < str.length; i++) {
        charCount++;
        let currChar = str.charAt(i);
        if (currChar != str.charAt(i + 1) || i + 1 == str.length) {
            res += currChar + charCount;
            charCount = 0;
        }
    }
    return res.length < str.length ? res: str;
}

function compress_string_2(str) {
    let res = [];
    let charCount = 0;
    
    for(let i = 0; i < str.length; i++) {
        charCount++;
        let currChar = str.charAt(i);
        if (currChar != str.charAt(i + 1) || i + 1 == str.length) {
            res.push(currChar + charCount);
            charCount = 0;
        }
    }
    return res.join('').length < str.length ? res.join(''): str;
}

console.log(compress_string_1('aaabbabbbbssheaaaoo'));
console.log(compress_string_2('abbb'));
console.log(compress_string_2('aaabbabbbbssheaaaoo'));

