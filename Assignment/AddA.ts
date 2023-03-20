
function Additiion(Arr : number[]) : number
{
let Sum : number = 0;
let cnt : number = 0;

for(cnt=0;cnt < Week.length; cnt++)
    {
    Sum = Sum + Week[cnt];

    }
return Sum;
}
var Week : number[]=[23,6,7,4,5,7]
var Ret : number = 0;
Ret = Additiion(Week)
console.log("Additiion is :"+Ret)