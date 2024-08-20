let str1 = 'listen', str2 = 'silent'


const Anagrams = (str1, str2) => {

    let sortStr1 = str1.split('').sort().join('')
    let sortStr2 = str2.split('').sort().join('')

    if (sortStr1 === sortStr2) {
        return true
    }
    else {
        return false
    }


    // for (let i = 0; i < str1.length; i++) {
    //     for (let j = 0; j < str2.length; j++) {
    //         if (sortStr1[i] === sortStr2[i]) {
    //             console.log( sortStr1[i] , sortStr2[i]);
    //             // return true
    //         }
    //         // else {
    //         //     return false
    //         // }
    //     }
    // }
}

console.log(Anagrams(str1, str2))
