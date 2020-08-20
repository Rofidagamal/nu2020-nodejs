function fun1(temp,type)
{
if (type=="Celsius")
return ((temp-32)*(5/9.0));
else 
return temp*(9/5.0)+32;
}
let t="Celsius";
let t2="fahrenheit";
let te=44;
console.log("Temp 44 fahrenheit is  "+fun1(te,t)+" Celsius");
console.log("Temp 44 Celsius is "+fun1(te,t2)+" fahrenheit");

