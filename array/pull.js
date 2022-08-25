const arr = [1, 2, 3, 4, 5];

const my_pull = (arr, el) => {

    let newArray = [];

    for(let i = 0; i <=arr.length-1; i++){
        newArray[i+1] = arr[i];
    }

    newArray[0] = el;

    return newArray;
};

console.log(my_pull(arr, 'first'))
