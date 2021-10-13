// Day 0: Hello, World!

function greeting(parameterVariable) {
    // This line prints 'Hello, World!' to the console:
    console.log('Hello, World!');

    // Write a line of code that prints parameterVariable to stdout using console.log:
     
     console.log(parameterVariable);
     
    
}



// Day 0:Data Types

// Write code that uses console.log to print the sum of the 'firstInteger' and 'secondInteger' (converted to a Number        type) on a new line.
console.log(firstInteger + Number(secondInteger)); // İçindeki sayıları toplamak  istediğimiz için başında Number fonksiyonu kullandık aksi taktirde cevap 412 olurdu.

// Write code that uses console.log to print the sum of 'firstDecimal' and 'secondDecimal' (converted to a Number            type) on a new line.
console.log(firstDecimal + Number(secondDecimal));

// Write code that uses console.log to print the concatenation of 'firstString' and 'secondString' on a new line. The        variable 'firstString' must be printed first.
console.log(firstString  + secondString);



// Day 1: Arithmetic Operators

function getArea(length, width) {
    let area;
    // Write your code here
    area = length * width;
    return area;
}

function getPerimeter(length, width) {
    let perimeter;
    // Write your code here
    perimeter = 2 * (length + width)
    return perimeter;
    
}

// Day 1: Functions

// First Method
function factorial(n) {
    if (n === 0) {
        return 1;
    }else {
        return n * factorial(n-1);
    }
}

// Second Method

function factorial(n) {
    let finalValue = 1;
    for(let i = n; i>1; i--) {
        finalValue *= i;
        }
        return finalValue; // Döngü tamamlandıktan sonra return ile finalValue değerini dışarı veriyor.
    } 

