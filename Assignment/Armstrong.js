var No1 = 153;
var No2 = No1;
var Cocent = 0;
var rem = 0;
var Sum = 0;
var i = 1;
var j = 0;
var m = 1;
var k = 0;
ChkArmstrong(No2);
function ChkArmstrong(No2) {
    Cocent = No1 / 100;
    rem = No1 % 100;
    k = rem / 100;
    j = (Cocent - k);
    Sum = Sum + (j * j * j);
    No1 = rem;
    Cocent = No1 / 10;
    rem = No1 % 10;
    k = rem / 10;
    j = (Cocent - k);
    Sum = Sum + (j * j * j);
    No1 = rem;
    Cocent = No1 / 1;
    rem = No1 % 1;
    k = rem / 1;
    j = (Cocent - k);
    Sum = Sum + (j * j * j);
    console.log(Sum);
    if (Sum == No2) {
        console.log(No2 + "is armstrong number");
    }
    else {
        console.log(No2 + "is not armstrong");
    }
}
