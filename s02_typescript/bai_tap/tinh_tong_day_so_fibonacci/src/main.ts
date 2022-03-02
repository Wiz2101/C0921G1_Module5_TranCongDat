function fibonacci(count: number) {
    sum = num1 + num2;
    if (count == 0) {
        return sum;
    } else {
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
        arr.push(sum);
        // console.log(sum);
        count--;
    }
    return fibonacci(count)
}

let num1 = 0;
let num2 = 1;
let sum = 0;
let arr = [0, 1];
fibonacci(10);
console.log(sum)
console.log(arr)
