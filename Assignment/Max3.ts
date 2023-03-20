function Maximum(No1: Number, No2: Number,No3: Number) : void
{    if(No1 > No2)
    {
        if(No1>No3)
        
            console.log("Maximum amoung three number is" + No1)
    }
    else
       if(No2>No3)
       {
        if(No2>No1)
        console.log("Maximum amoung three number is" + No2)
       }
if(No3>No2)
{
    if(No3>No1)
    console.log("Maximum amoung three number is" + No3)
}
}  
var A : Number= 6
var B : Number = 89
var C : Number = 23

Maximum(A,B,C)