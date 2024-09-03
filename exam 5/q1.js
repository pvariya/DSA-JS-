let arr = [1, 2, 3, 4, 5, 4, 2, 1, 5, 7, 5];

let map = new Map();

const sum = (arr) => {
    let sumArr = 0;
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            sumArr += map.get(arr[i]);
        } else {
            map.set(arr[i], arr[i]);
            sumArr += arr[i];
        }
    }
    return sumArr;
};

for (let i = 0; i < arr.length; i++) {
    let sub = [];
    for (let j = i; j < arr.length; j++) {
        sub.push(arr[j]);
        console.log(sub);
        sum(sub);
    }
}

console.log(sumArr);

