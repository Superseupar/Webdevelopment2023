var Arrary : number[] = [23,89,6,29,56,45,77,32]
var length =Arrary.length
var Max : number = 0
var i : number
var j : number
var temp : number
Maximum()
function Maximum() : void
{
for(i=0;i<length;i++)
{
  for(j=i+1;j<length;j++)
  {    
    if(Arrary[i] > Arrary[j])
    {
    temp=Arrary[j]
    Arrary[j]=Arrary[i]
    Arrary[i] = temp

    }

} }
 for(i=0;i<length;i++)
 {
  console.log("Arrary is" + Arrary[i])  
  Max = Arrary[i]
 }
}

console.log("Maximum number in Arrary is" + Max)