function fibonacci(count) {
    sum = num1 + num2;
    if (count == 0) {
        return sum;
    }
    else {
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
        arr.push(sum);
        // console.log(sum);
        count--;
    }
    return fibonacci(count);
}
var num1 = 0;
var num2 = 1;
var sum = 0;
var arr = [0, 1];
fibonacci(10);
console.log(sum);
console.log(arr);
