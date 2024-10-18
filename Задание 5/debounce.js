function debounce(func, delay) {

    let timeout;

    return function(...args) {

        // Сбросим древний таймер
        if (timeout) {
            clearTimeout(timeout);
        }

        // Новенький таймер
        timeout = setTimeout(() => {
            func(...args);
        }, delay);
    };
}

const debouncedFunction = debounce((message) => {
    console.log(message);
    console.log('Вызвана функция с задержкой');
}, 2000);

debouncedFunction();
debouncedFunction("Привет");

