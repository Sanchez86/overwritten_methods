const arr = [1, 2, 3, 4, 5];

// function my_push (arr, el) {
//     arr[arr.length] = el;
//     return arr;
// }

const my_push = (arr, el) => {
    arr[arr.length] = el;
    return arr;
};

console.log(my_push(arr, 66))
