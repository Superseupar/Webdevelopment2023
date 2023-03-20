var A : number = 0
var B : number = 1
var Fib : number = 21
var Sum : number = 1
var i : number 
Fibonacci() 
function Fibonacci() : void
{
for(i=0;i<Fib;i++)
{
        console.log("Fibonisisi series is"+ Sum)
         Sum=A + B
         A = B
         B = Sum
         if (Sum >Fib)
         break
}
}

                                        