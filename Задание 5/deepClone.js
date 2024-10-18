// Проверяем, является ли аргумент объектом или массивом, иначе возвращаем его.
// Создаем копию и с помощью рекурсии копируем вложенные ключи

function deepClone(obj) {

    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    const clone = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
        clone[key] = deepClone(obj[key]);
    }

    return clone;
}

// Пример
const original = {
    name: 'John',
    address: {
        city: 'New York',
        country: 'USA'
    }
};

const copy = deepClone(original);

copy.address.city = 'Los Angeles';

console.log(original.address.city); // New York (оригинальный объект не должен измениться)
console.log(copy.address.city);     // Los Angeles
