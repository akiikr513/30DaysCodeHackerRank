class AdvancedArithmetic(object):
    def divisorSum(n):
        raise NotImplementedError

class Calculator(AdvancedArithmetic):
    def divisorSum(self, n):
        sum = 0
        for i in range(1, n//2 + 1):
            if n % i == 0:
                sum += i
        return sum + n


n = int(input())
my_calculator = Calculator()
s = my_calculator.divisorSum(n)
print("I implemented: " + type(my_calculator).__bases__[0].__name__)
print(s)


"""// class AdvancedArithmetic {
//   divisor(n) {
//     return n || 0;
//   };
// }

// class Calculator extends AdvancedArithmetic {
//   constructor(props) {
//     super(props);

//     this.divisor = this.divisorSum.bind(this);
//   }

//   divisorSum(n) {
//     return Array(n).fill(0).reduce((target, item, index) => {
//       !(n % (index + 1)) && (target += (index + 1)) ;

//       return target;
//     }, 0);
//   }
// }

// function Solution () {
//   const n = 6;

//   const myCalculator = new Calculator();

//   let sum = myCalculator.divisor(n);

//   console.log("I implemented: AdvancedArithmetic\n" + sum); 
// }

// Solution();"""
