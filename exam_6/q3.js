// The Enchanted Digit Sum:
// In the magical forest of Numeria, numbers had hidden powers within their digits. To unlock these
// powers, the wizard created a spell known as 'sumOfDigits(n)'. This spell revealed the sum of a
// number's digits, helping to unlock the true potential of each number. Guide the wizard to sum the
// digits of 1234 and witness the power that is revealed.
// - Example Spell:
// Input: 1234

const num = 1234;

const sum_of_Digits = (n) => {
    if (n === 0) {
        return 0;
    }

    let num = n % 10
    let sum = Math.floor(n / 10)
    return (num) + sum_of_Digits(sum)
}

console.log(sum_of_Digits(num));
