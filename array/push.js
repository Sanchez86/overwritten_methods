
// Функция добавляет новый элемент в конец массива.
// Функция возвращает длинну нового массива.
// Массив на котором была вызвана функция модифицируется.

const arr = [1, 2, 3, 4, 5];

Array.prototype.my_push = function (el) {

    if (!arr) {
        return 0;
    }
    
    this[this.length] = el;

    return this.length;
}

const result = arr.my_push(66);

console.log(result);
console.log(arr);
