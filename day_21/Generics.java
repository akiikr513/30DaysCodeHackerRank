// this is in js, 
/**class BaseClass {
*  hello = function () {
*     console.log("hello!");
*   };
* }
*
* function GenericClass(T, Base) {
*   return class extends Base {
*     field = new T();
*   };
* }
*
* class DerivedFromGeneric extends GenericClass(Array, BaseClass) {
*   greet = function () {
*     this.hello();
*     console.log("greetings ", this.field);
*   };
* }
*
* let i = new DerivedFromGeneric();
* i.greet();
**/
//  this is in Java 7 
import java.util.*;

class Printer <T> {

    /**
    *    Method Name: printArray
    *    Print each element of the generic array on a new line. Do not return anything.
    *    @param A generic array
    **/
    
    // Write your code here
    public static<E> void printArray(E[] array){

       for(E element : array){
           System.out.println(element);
       }
   }
}

public class Generics {
    
    public static void main(String args[]){
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        Integer[] intArray = new Integer[n];
        for (int i = 0; i < n; i++) {
            intArray[i] = scanner.nextInt();
        }

        n = scanner.nextInt();
        String[] stringArray = new String[n];
        for (int i = 0; i < n; i++) {
            stringArray[i] = scanner.next();
        }
        
        Printer<Integer> intPrinter = new Printer<Integer>();
        Printer<String> stringPrinter = new Printer<String>();
        intPrinter.printArray( intArray  );
        stringPrinter.printArray( stringArray );
        if(Printer.class.getDeclaredMethods().length > 1){
            System.out.println("The Printer class should only have 1 method named printArray.");
        }
    } 
}
