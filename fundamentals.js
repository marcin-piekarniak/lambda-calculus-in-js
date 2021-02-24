// numbers basics

my0 = (s) => (z) => z
succ = (w) => (y) => (x) => y(w(y)(x))

add = (x) => (y) => x(succ)(y)
multiply = (x) => (y) => (z) => x(y(z))

divide = (n) => (m) => yCombinator((R) => (x) => 
        ifThenElse(leastOrEqual(multiply(x)(m))(n))
            (() => R(add(x)(my1)))
            (() => subtract(x)(my1))
            ()
    )(my0)

modulo = (n) => (m) => 
    subtract
        (n)
        (multiply(m)(divide(n)(m)))

my1 = succ(my0)
my2 = succ(my1)
my3 = succ(my2)
my4 = succ(my3)
my5 = succ(my4)
my6 = succ(my5)
my7 = succ(my6)
my8 = succ(my7)
my9 = succ(my8)
my10 = succ(my9)
my100 = multiply(my10)(my10)
my1000 = multiply(my100)(my10) 

my2002 = add(multiply(my2)(my1000))(my2)

// boolean basics

myTrue = (x) => (y) => x
myFalse = (x) => (y) => y

myAnd = (x) => (y) => x(y)(myFalse)
myOr = (x) => (y) => x(myTrue)(y)
myNot = (x) => (y) => (z) => x(z)(y) 
myNot2 = (x) => x(myFalse)(myTrue)

ifThenElse = (x) => (y) => (z) => x(y)(z)

// lists

cons = (a) => (b) => (z) => z(a)(b)

car = (p) => p(myTrue)
cdr = (p) => p(myFalse)

nil = myFalse
isNil = (l) => l((h) => (t) => (d) => myFalse)(myTrue)

print2(isNil(cons(my2)(nil)))

// comparisons/recursion

yCombinator = (R) => {
    return (x => x(x))(x => R(y => x(x)(y)))
}

// convert (a,_) to (a+1, a)
phi = (p) => cons(succ(car(p)))(car(p))

prec = (n) => cdr(n(phi)(cons(my0)(my0)))
// prec2 = n => f => x => n(g => h => h(g(f)))(_ => x)(u => u)
isZero = (x) => x(myFalse)(myNot)(myFalse)

largerOrEqual = (x) => (y) => isZero(x(prec)(y))
leastOrEqual = (x) => (y) => largerOrEqual(y)(x)
equal = (x) => (y) => myAnd(largerOrEqual(x)(y))(leastOrEqual(x)(y))
notEqual = (x) => (y) => myNot(equal(x)(y))
larger = (x) => (y) => myNot(leastOrEqual(x)(y))
least = (x) => (y) => myNot(largerOrEqual(x)(y))



// translating

function printNumberNoNewline(myNum) {
    process.stdout.write((myNum((x) => x + 1)(0)).toString())
}

function printNumber(myNum) {
    printNumberNoNewline(myNum);
    process.stdout.write('\n');
}

function printBooleanNoNewline(myBool) {
    process.stdout.write(myBool(true)(false).toString())
}

function printBoolean(myBool) {
    printBooleanNoNewline(myBool);
    process.stdout.write('\n');
}

// function printListNoNewline(myList) {
//     printElems = (list) => {
//         if 
//         printNoNewline(car(list))
//         process.stdout.write(', ')
//         printElems(cdr(list))
//     }
//     process.stdout.write('(')
//     printList();
//     process.stdout.write(')')
// }

// function printList(myList) {
//     printListNoNewline(myList);
//     process.stdout.write('\n');
// }

function printNoNewline(elem) {
    
    if (elem(true)(false) === false) {
        // 0 or false
        process.stdout.write('0')
    } else if (elem(() => true, false) === true) {
        // number larger than 0
        printNumberNoNewline(elem)
    } else if (typeof elem(true, true) === 'function') {
        // list
        printListNoNewline(elem)
    } else {
        // true
        process.stdout.write('1')
    }
}

function print(elem) {
    printNoNewline(elem)
    process.stdout.write('\n')
}


// misc

subtract = (x) => (y) => y(prec)(x)

empty2 = (f) => (x) => x
append2 = (a) => (l) => (f) => (x) => f(a)(l(f)(x))
head2 = (l) => l((a) => (b) => a)(x => x)
isEmpty2 = (l) => l((a) => (b) => myFalse)(myTrue)
next2 = (l) => cdr(l((a) => (b) => cons(append2(a)(car(b)))(car(b)))(cons(empty2)(empty2)))

printListNoNewline2 = (l) => {
    let firstCall = true
    functionBody = (l) => {
        ifThenElse(isEmpty2(l))
            (() => {})
            (() => {
                if (!firstCall) {
                    process.stdout.write(' ')
                } else {
                    firstCall = false
                }

                printNoNewline2(head2(l))
                functionBody(next2(l))
            })
            ()
    }

    process.stdout.write('(')
    functionBody(l);
    process.stdout.write(')');
}

printList2 = (l) => {
    myPrintListNoNewline(l)
    process.stdout.write('\n');
}

function printNoNewline2(elem) {
    if (elem(() => () => 1)(0) === 0) {
        // 0, false, empty list
        process.stdout.write('()')
    } else if (elem(() => () => 1)(0) === 1) {
        //non empty list   
        printListNoNewline2(elem);
    } else if (elem(() => 1)(0) === 1) { 
        // number
        printNumberNoNewline(elem)
    } else {
        // true
        printBooleanNoNewline(elem)
    }
}

function print2(elem) {
    printNoNewline2(elem)
    process.stdout.write('\n')
}

L2 = append2(my5)(empty2) 
L = append2(my4)(L2)

// printNumber(head2((L2)))
// printNumber(head2(next2(L)))
// print2(myFalse)
// print2(my0)
// print2(my1)
// print2(myTrue)
// print2(empty2)
// print2(append2(my4)(append2(my5)(empty2)))
// print2(append2(append2(my4)(append2(my5)(empty2)))
//               (append2(my4)(append2(my5)(empty2))))
module.exports = {
    my0,
    succ,
    add,
    multiply,
    my1,
    my2,
    my3,
    my4,
    my5,
    my6,
    my7,
    my8,
    my9,
    my10,
    my100,
    my1000,
    my2002,
    myTrue,
    myFalse,
    myAnd,
    myOr,
    myNot,
    ifThenElse,
    cons,
    car,
    cdr,
    yCombinator,
    phi,
    prec,
    isZero,
    largerOrEqual,
    leastOrEqual,
    equal,
    notEqual,
    larger,
    least,
    printNumber,
    printBoolean,
    subtract,
    empty2,
    append2,
    head2,
    isEmpty2,
    next2,
    printListNoNewline2,
    printList2,
    printNoNewline2,
    print2,
    modulo,
    divide,
}