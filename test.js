function area(n)
{
    var square=n*n;
    return square;
}
function testcallback(callbackfunction)
{
return callbackfunction(20);
}
console.log(testcallback(area));