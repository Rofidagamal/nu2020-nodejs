//Strings
console.log("# Stings");
let s = "Rofida Gamal";
console.log("My name is " + s);
console.log("The first char in s is" + s.charAt(0));
let s2 = s.replace(" ", "_");
console.log("The username of s is " + s2);
s2 = s.toUpperCase();
console.log("Convert to upper case " + s2);
s2 = s.toLowerCase();
console.log("Convert to lower case " + s2);
s2 = "2*9+2";
console.log("The solution of s2 equation is " + eval(s2));
console.log("Last name is " + s.substr(7));
console.log("all names in single elements " + s.split(" "));
console.log("----------------");
//Arrays
console.log("# Arrays");
let arr = [1, 2, 3, 4, 5]
arr.unshift(0);
console.log("After adding 0 in front, the array is " + arr);
arr.push(6);
console.log("After adding 6 in back, the array is " + arr);
arr.push(7);
arr.unshift(-1);
arr.pop();
arr.shift();
console.log("After delete 7 and -1, the array is " + arr);
arr.forEach(function (index, item) {
    console.log("the index is " + index + " the item is " + item);

});
let arr2=["Mohamed","Rofida","Yasmeen","Rahma","Ahmed"];
console.log("Sorted array is "+arr2.sort());
console.log("Reverse array is "+arr2.reverse());
