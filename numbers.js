my0 = (s) => (z) => z
succ = (w) => (y) => (x) => y(w(y)(x))

add = (x) => (y) => x(succ)(y)
multiply = (x) => (y) => (z) => x(y(z))

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

// converting lambda calculus numbers to js numbers
translate = num => num((x) => x + 1)(0)

console.log(translate(my2002))