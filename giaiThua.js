/**
 * Created by msi on 08/02/2017.
 */

function recursionFact(num) {
    if (num === 0)
    { return 1; }
    else
    { return num * recursionFact( num - 1 ); }

}
console.log(recursionFact(6));

function forFact(num) {
    var result = 1;
    for (var i = 2; i <= num; i++){
        result = result * i;
    }
    return result;
}
console.log(forFact(4));

function whileFact(num) {
    var result = num;
    if(num == 0) {
        return 1;
    }
    if(num < 0 ) {
        return undefined;
    }
    while (num > 1){
        num--;
        result *= num;
    }
    return result;
}
console.log(whileFact(6));

function forIncreaseFact(num) {
    if (num === 0 || num === 1){
        return 1;
    }
    for (var i = num - 1; i >= 1; i--){
        num = num * i;
    }
    return num;
}
console.log(forIncreaseFact(4));

function reduceFactorial(n) {
    return Array.apply(0, Array(n)).reduce(function(x, y, z) { return x + x * z; }, 1);
}
console.log(reduceFactorial(6));

function tailRecurFact (n) {
    function fac_helper (n, fac)
    {
        if (n <= 1)
            return fac ;
        return fac_helper (n - 1, n * fac) ;
    }

    return fac_helper (n, 1) ;
}
console.log(tailRecurFact(4));

function anonymousFact() {
    return function (inputNum) {
        return inputNum<=1?1:(inputNum*arguments.callee(inputNum-1));
        //Conditional (ternary) Operator
    }
}
var a = anonymousFact();
console.log(a(6));

var memoize = function(func){
    var cache = {};
    return function(){
        var key = Array.prototype.slice.call(arguments).toString();
        return key in cache ? cache[key] : (cache[key] = func.apply(this,arguments));
    }
}
var memoizeFact = memoize(function(n) {
    return (n <= 1) ? 1 : n * memoizeFact(n-1);
});
console.log(memoizeFact(4));
