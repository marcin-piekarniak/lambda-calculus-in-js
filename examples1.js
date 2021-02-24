const M = require('./fundamentals.js')

console.log('sum from 0 to 100')
sumUpTo = (n) => M.yCombinator((R) => (n) => {
    return M.ifThenElse(M.isZero(n))(() => my0)(() => M.add(n)(R(M.prec(n))))()
})(n)

M.print2(sumUpTo(M.multiply(M.my10)(M.my10)))
console.log();



console.log('factorial 6')
factorial = M.yCombinator((factorial) => (n) => 
    M.ifThenElse(M.equal(n)(M.my0))
        (() => M.my1)
        (() => M.multiply(n)(factorial(M.prec(n))))
    ()
)

M.print2(factorial(my6))
console.log();

isPrime = (n) => M.yCombinator((R) => (i) => {
    return M.ifThenElse
        (M.leastOrEqual(M.multiply(i)(i))(n))
        (() => M.ifThenElse(M.isZero(M.modulo(n)(i)))
            (() => M.myFalse)
            (() => R(add(i)(my1)))())
        (() => M.myTrue)()
})(my2)

primes = (n) => M.yCombinator((R) => (i) => { 
    return M.ifThenElse(M.leastOrEqual(i)(n))
        (() => M.ifThenElse(isPrime(i))
            (() => M.append2(i)(R(M.add(i)(my1))))
            (() => R(M.add(i)(my1)))())
        (() => M.empty2)()
})(my2)

M.print2(primes(M.my100))
