const arr = [1, 2, 3, 4, 5];

const my_unshift = (arr, el) => {

    let newArray = [];
    newArray[0] = el;

    for(let i = 0; i <=arr.length-1; i++){
        newArray[i+1] = arr[i];
    }

    return newArray;
};

console.log(my_unshift(arr, 'first'))
