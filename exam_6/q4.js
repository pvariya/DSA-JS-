// 4. The Mirror of Reversal:
// In the land of Reflection, there was a magical mirror that could reverse any string placed before it.
// This mirror, known as 'reverseString(s)', could turn words around, showing them in their true
// reversed form. Your mission is to recreate this mirror using recursion and reveal the reversed form
// of the word 'recursion'.
// - Example Reflection:
// Input: 'recursion'
// Output: 'noisrucer'

let sring = 'recursion'

const reverseString = (str) => {
    if (str === '') {
        return str
    }
    return reverseString(str.slice(1)) +str[0]
}

console.log(reverseString(sring));
