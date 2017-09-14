function compress_string(str) {
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

console.log(compress_string('aaabbabbbbssheaaaoo'));
console.log(compress_string('abbb'));
