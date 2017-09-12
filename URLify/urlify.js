
function urlify_1(str) {
    str = str.split('');
    let url = '';

    for (let i = 0; i < str.length; i++) {
        if (str[i].charCodeAt(0) === 32) {
            url += '%20';
        } else {
            url += str[i];
        }
    }

    return url;
}

function urlify_2(str) {
    return str.split(' ').join('%20');
}

function urlify_3(str) {
    return encodeURIComponent(str);
}

console.log(urlify_1('Hello World      '));
console.log(urlify_2('Hello World      '));
console.log(urlify_3('Hello World      '));
