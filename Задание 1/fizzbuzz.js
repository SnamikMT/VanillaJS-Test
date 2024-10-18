// Выполняем проверку на то, что кратны ля они сразу 3 и 5, чтобы не было проблемы, при которой одно и тоже число выводилось трижды

function fizzBuzz() {

    for (let i = 1; i <= 100; i++) {

        if (i % 3 === 0 && i % 5 === 0) {
            console.log(i + ': FizzBuzz');

        } else if (i % 3 === 0) {
            console.log(i + ': Fizz');
            
        } else if (i % 5 === 0) {
            console.log(i + ': Buzz');
        }
    }
}

fizzBuzz();
