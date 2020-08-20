//if Statments
console.log("# if Statments");
let x=4;
if (x%2==0)
console.log("X is even");
else if(x%2!=0)
console.log("X is odd");
console.log("--------------------");
console.log("# logic operators");
let z=-4;
if (z%2==0 && z>0)
{
    console.log("Z is even and postive");

}
else if (z%2==0 && z==0)
{
    console.log("Z is even and zero");

}
else if (z%2!=0 && z>0)
{
    console.log("Z is odd and postive");

}
else if (z%2!=0 && z<0)
{
    console.log("Z is odd and negative");
}
else
{
    console.log("Z is even and negative");


}
console.log("--------------------");

console.log("# for loops");
//for loops
let x1=2;
let x2=2;
let p=1;
for (i=0;i<x2;i++)
{
p*=x1;
}
console.log("2 power 2 is "+p);
console.log("--------------------");
console.log("# While loops");
let p2=1;
while (x2>0)
{
    p2*=x1;
    x2--;
}
console.log("2 power 2 is "+p2);
console.log("--------------------");
console.log("# Do while loops");
let x3=2;
let x4=2;
let p3=1;
do
{
    p3*=x3;
    x4--;
}while (x4>0);
console.log("2 power 2 is "+p3);
console.log("--------------------");
