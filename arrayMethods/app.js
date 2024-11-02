const numbers = [1, true, 2, "пойдем гулять", 6, 5, null];

numbers.forEach(function (item, index) {
    if (typeof item === 'number' && item === index) {
        console.log(index, item);
    }
})

// ____________________________________________________________

const num = [0, 1, 2, 4, 6];

const newNum = num.filter(function (n) {
    return n % 2 === 0;
})

console.log(`New array: ${newNum}`)

//_____________________________________________________________

//homework
//> Gegham Barseghyan:
// ДЗ по масивам;

// 1. Почитать про мутируюзие массивы;
// ---
// Задание 1: Дано: массив чисел const numbers = [5, 10, 15, 20, 25]. Используя map, создайте новый массив, где каждый элемент будет увеличен на 3.
// Ожидаемый результат: [8, 13, 18, 23, 28]

// ---
// Задание 2: Дан массив строк const words = ["apple", "banana", "cherry", "date"]. Используя метод map, создайте новый массив, который будет содержать длины каждой строки из исходного массива.

// Ожидаемый результат: [5, 6, 6, 4]
// ---
// Задание 3: Дан массив объектов с информацией о товарах:
// const products = [
//     { name: "laptop", price: 1000 },
//     { name: "phone", price: 600 },
//     { name: "tablet", price: 450 }
// ];
// Используя map, создайте новый массив, где каждый объект будет содержать только name товара и price с 20%-ной скидкой.

// Ожидаемый результат:
// [
//     { name: "laptop", price: 800 },
//     { name: "phone", price: 480 },
//     { name: "tablet", price: 360 }
// ]

//Task 1

const numbers2 = [5, 10, 15, 20, 25];

const newNumbers2 = numbers2.map(function (x) {
    return x + 3
})

console.log(`Task 1 : numbers2: ${numbers2}  |  newNumbers2: ${newNumbers2}`);

//Task 2

const words = ["apple", "banana", "cherry", "date"];

const count = words.map(function (fruit) {
    return fruit.length
})

console.log(`Task 2 : words: ${words}  |  count: ${count}`);

//Task 3

const products = [
    { name: "laptop", price: 1000 },
    { name: "phone", price: 600 },
    { name: "tablet", price: 450 }
];

const discount = products.map(function (product) {
    return product = {
        name: product.name,
        price: product.price - product.price * 20 / 100
    };
})

console.log("Task 3 : ", discount)
