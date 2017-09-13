function isPalindrome(msg) {
    let text = msg.replace(/\W/g, '').toLowerCase();
    let reverseText = text.split('').reverse().join('');
    if (text === reverseText) {
        return true;
    }
    return false;
}

console.log(isPalindrome('Eva, Can I Stab Bats In A Casve?'));