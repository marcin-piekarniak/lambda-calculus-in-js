myTrue = (x) => (y) => x
myFalse = (x) => (y) => y

myAnd = (x) => (y) => x(y)(myFalse)
myOr = (x) => (y) => x(myTrue)(y)
myNot = (x) => (y) => (z) => x(z)(y) 
myNot2 = (x) => x(myFalse)(myTrue)

ifThenElse = (x) => (y) => (z) => x(y)(z)

function printBoolean(f) {
    console.log(f(true)(false))
}

printBoolean(myOr(myFalse)(myTrue));
printBoolean(myAnd(myFalse)(myFalse));
printBoolean(myNot(myTrue));
printBoolean(myNot(myFalse));
console.log(ifThenElse(myFalse)(0)(1))