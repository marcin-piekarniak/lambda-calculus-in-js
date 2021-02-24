/*  equivalent pretty
sumUpTo = (n) => M.yCombinator((R) => (n) => {
    return M.ifThenElse (M.isZero(n))
            (() => my0)
            (() => M.add(n)(R(M.prec(n))))
        ()
 })(n)
M.printNumber(sumUpTo(M.multiply(M.my5)(M.my5))
*/

console.log(
    (num => num((x) => x + 1)(0))(
        ((n) => ((R) => (x => x(x))(x => R(y => x(x)(y))))
            ((R) => (n) =>  ((x) => (y) => (z) => x(y)(z))
                    (((x) => x
                        ((x) => (y) => y)
                        ((x) => (y) => (z) => x(z)(y))
                        ((x) => (y) => y))
                        (n))
                    (() => (s) => (z) => z)
                    (() => ((x) => (y) => x((w) => (y) => (x) => y(w(y)(x)))(y))
                        (n)
                        (R(((n) => 
                            ((p) => p((x) => (y) => y))(n
                                ((p) => ((a) => (b) => (z) => z(a)(b))
                                    (((w) => (y) => (x) => y(w(y)(x)))(((p) => p((x) => (y) => x))(p)))
                                    (((p) => p((x) => (y) => x))(p)))
                                (((a) => (b) => (z) => z(a)(b))((s) => (z) => z)((s) => (z) => z))))(n)))
                        )
                    ()
            )
            (n)
        )(
            ((x) => (y) => (z) => x(y(z)))(
                ((w) => (y) => (x) => y(w(y)(x)))
                (((w) => (y) => (x) => y(w(y)(x)))
                (((w) => (y) => (x) => y(w(y)(x)))
                (((w) => (y) => (x) => y(w(y)(x)))
                (((w) => (y) => (x) => y(w(y)(x)))
                ((s) => (z) => z)))))
            )(
                ((w) => (y) => (x) => y(w(y)(x)))
                (((w) => (y) => (x) => y(w(y)(x)))
                (((w) => (y) => (x) => y(w(y)(x)))
                (((w) => (y) => (x) => y(w(y)(x)))
                (((w) => (y) => (x) => y(w(y)(x)))
                ((s) => (z) => z)))))
            )
        )
    )
);
