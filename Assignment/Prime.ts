var No1 : number = 11
var i : number 
var Cocent : number
var Rem : number
CheckPrime()
function CheckPrime() : void
{
for(i=2;i<=No1;i++)
{
    Cocent =No1/i
    Rem=No1%i
    if(Rem==0)
    {
        if(Cocent==1)
        {
        console.log("The number is Prime")
        break     
        }
        else
        {
    console.log("The number is not Prime")
         break           
        }
        }
}                   
}