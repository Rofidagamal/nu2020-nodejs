//Infinity
console.log("# Infinity Topic ")
let inf_var = Math.pow(10, 1000);
console.log(inf_var == Infinity);
console.log(1 / Infinity);
console.log("-------------------------------")
//NaN
console.log("# NaN Topic ")
let x = 9
if (isNaN(x))
    console.log(NaN);
else
    console.log(x);
let y = "Rofida"
if (isNaN(y))
    console.log(NaN);
else
    console.log(x);
console.log("-------------------------------")

//Null
console.log("# Null Topic")

if (x == null)
    console.log(NaN);
else
    console.log(x);
if (y == null)
    console.log(NaN);
else
    console.log(y);
console.log("-------------------------------")
//undefined
console.log("# undefined Topic");
function test(tt) {
    if (tt === undefined) {
      return 'Undefined value!';
    }
    return tt;
  }
  
  let d;
  
  console.log(test(d));
console.log("-------------------------------")
