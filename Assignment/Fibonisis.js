var A = 0;
var B = 1;
var Fib = 21;
var Sum = 1;
var i;
Fibonacci();
function Fibonacci() {
    for (i = 0; i < Fib; i++) {
        console.log("Fibonisisi series is" + Sum);
        Sum = A + B;
        A = B;
        B = Sum;
        if (Sum > Fib)
            break;
    }
}
