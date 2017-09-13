function caesarCipher(str, num) {
    num = num % 26;
    let msgArr = str.toLowerCase().split('');
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    if (num < 0) {
        num += 26;
    }

    let newMsg = '';

    for (let i = 0; i < msgArr.length; i++) {
        if (alphabet.includes(msgArr[i])) {
            let index = alphabet.indexOf(msgArr[i]);
            newMsg += alphabet[(index + num) % 26];
        } else {
            newMsg += msgArr[i];
        }
    }

    return newMsg;

}

console.log(caesarCipher('JavaScript', -900));