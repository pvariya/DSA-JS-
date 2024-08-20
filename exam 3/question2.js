let price = [7, 1, 5, 3, 6, 4]

let maxPro = 0
for (let i = 0; i < price.length; i++) {
    for (let j = i + 1; j < price.length; j++) {
        let profit = price[j] - price[i]
        maxPro = Math.max(maxPro, profit)
    }
    // let profit = price[i + 1] - price[i]
    // maxPro = Math.max(maxPro, profit)
}

console.log(maxPro);
