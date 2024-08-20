let str1 = 'listen', str2 = 'silent'
let sortStr1 = str1.split('').sort()
let sortStr2 = str2.split('').sort()


for (let i = 0; i < str1.length; i++) {
    if (sortStr1[i] !== sortStr2[i]) {
        console.log("false")
        break;
    }
    else {
        console.log("true")
        break
    }
}

console.log();