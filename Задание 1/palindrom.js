// Для входной строки приравниваем к нижнему регистру и убираем проблемы
// Во второй переменной переворачиваем результат переменной str 2 и сравниваем

function isPalindrome(str) {

    let str2 = str.toLowerCase().replace(/\s/g, '');
    
    let reverse = str2.split('').reverse().join('');
    
    return reverse === str2;
}

console.log(isPalindrome("А роза упала на лапу Азора"));
console.log(isPalindrome("Привет"));
