function Additiion(Arr) {
    var Sum = 0;
    var cnt = 0;
    for (cnt = 0; cnt < Week.length; cnt++) {
        Sum = Sum + Week[cnt];
    }
    return Sum;
}
var Week = [23, 6, 7, 4, 5, 7];
var Ret = 0;
Ret = Additiion(Week);
console.log("Additiion is :" + Ret);
