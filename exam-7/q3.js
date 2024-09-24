const findPeakElement = (nums) => {
    let left = 0;
    let right = nums.length - 1;

        let mid = Math.floor((left + right) / 2);
           
    return mid;
};

const nums = [1, 2, 3, 1];
console.log(findPeakElement(nums))
