function fizzBuzz(num) {
    for (let i = 1; i <= num; i++) {
        let result = '';

        if (i % 3 === 0) {
            result += 'Fizz';
        } 
        if (i % 5 === 0) {
            result += 'Buzz';
        }
        if (result === '') {
            result = i;
        }
        console.log(result);
    }
}

function ternaryFizzBuzz(num) {
    for (let i = 1; i <= num; i++) {
        let result = '';

        result += i % 3 === 0 ? 'Fizz' : '';
        result += i % 5 === 0 ? 'Buzz' : '';
        result += result === '' ? i : '';
        
        console.log(result);
    }
}

/**
 * Modular Fizz Buzz
 * @param {Number} num 
 */
function modularFizzBuzz(num, fizz=3, buzz=5) {
    for (let i = 1; i <= num; i++) {
        if (i % fizz === 0 && i % buzz === 0) {
            console.log('FizzBuzz')
        } else if (i % fizz === 0) {
            console.log('Fizz');
        } else if (i % buzz === 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
}

// fizzBuzz(20);
// modularFizzBuzz(20)
ternaryFizzBuzz(20);