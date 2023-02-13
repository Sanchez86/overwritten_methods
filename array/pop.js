// Функция удаляет последний элемент массива.
// Функция возвращает последний элемент массива.
// Массив на котором была вызвана функция модифицируется.

const testArr = [1, 2, 3, 4, 5];

Array.prototype.my_pop = function () {

    if (this.length === 0) {
        return undefined;
    }

    const lastElement = this[this.length-1];


    this.length = this.length-1;

    return lastElement;
};

const result = testArr.my_pop();

console.log(result);
console.log(testArr);
