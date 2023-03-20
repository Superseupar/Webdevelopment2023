var No1 :number= 153
var No2 : number = No1
var Cocent : number = 0
var rem : number = 0
var Sum : number = 0
var i : number = 1
var j : number = 0
var m : number = 1
var k : number = 0
ChkArmstrong(No2)
function ChkArmstrong(No2:number) : void 
{
Cocent = No1/100
rem=No1%100
k=rem/100
j = (Cocent-k)
Sum = Sum + (j*j*j)
No1=rem
Cocent = No1/10
rem=No1%10
k=rem/10
j = (Cocent-k)
Sum = Sum + (j*j*j)
No1=rem
Cocent = No1/1
rem=No1%1
k=rem/1
j = (Cocent-k)
Sum = Sum + (j*j*j)
console.log(Sum)
if(Sum==No2)
{
console.log(No2+"is armstrong number")
}
else
{
console.log(No2+"is not armstrong")
}
}