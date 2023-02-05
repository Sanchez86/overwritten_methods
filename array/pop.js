const arr = [1, 2, 3, 4, 5];

const my_pop = (arr) => {

    let newArray = [];

    for (let i = 0; i < arr.length-1; i++){
        newArray[i] = arr[i];
    }

    return newArray;
};

console.log(my_pop(arr));
