// Remove Duplicates

let arr = [1, 2, 3, 5, 4, 5, 3];

arr.sort()

for(let i =0 ; i < arr.length; i++) {
    if(arr[i] == arr[i+1]){
      arr.splice(i,1)
      i--
    }
}

console.log(arr);

