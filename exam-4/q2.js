let arr = [1, 2, 3, 2, 1]
const duplicate = (arr) => {


    for (let i = 1; i <= arr.length; i++) {
        for (let j = i + 1; j <= arr.length; j++) {
            if (arr[i] === arr[j]) {
                return i;
            }
        }
    }

    return -1;
}


console.log(duplicate(arr));
