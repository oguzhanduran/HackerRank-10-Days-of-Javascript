// Day 0: Hello, World!

function greeting(parameterVariable) {
    // This line prints 'Hello, World!' to the console:
    console.log('Hello, World!');

    // Write a line of code that prints parameterVariable to stdout using console.log:
     
     console.log(parameterVariable);
     
    
}
//*******************************************************************************************************************/



// Day 0:Data Types

// Write code that uses console.log to print the sum of the 'firstInteger' and 'secondInteger' (converted to a Number        type) on a new line.
console.log(firstInteger + Number(secondInteger)); // İçindeki sayıları toplamak  istediğimiz için başında Number fonksiyonu kullandık aksi taktirde cevap 412 olurdu.

// Write code that uses console.log to print the sum of 'firstDecimal' and 'secondDecimal' (converted to a Number            type) on a new line.
console.log(firstDecimal + Number(secondDecimal));

// Write code that uses console.log to print the concatenation of 'firstString' and 'secondString' on a new line. The        variable 'firstString' must be printed first.
console.log(firstString  + secondString);
//*******************************************************************************************************************/




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
//*******************************************************************************************************************/




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
//*******************************************************************************************************************/




//Day 1: Let and Const

    function main() {
        
        // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
        const PI = Math.PI;
        let input = Number(readLine()); // yukardaki açıklama satırında girdiyi okuyabilmek için "readline()" fonksiyonuna inputu ata diyor bu yüzden böyle yaptık.
        
        // Print the area of the circle:
        console.log(PI* Math.pow(input,2))
        
        // Print the perimeter of the circle:
        console.log(2 * PI * input)
//*******************************************************************************************************************/




// Day 2: Conditional Statements: If-Else

    function getGrade(score) {
        let grade;
        // Write your code here
        if (score > 25 && score <= 30) { //bunu "score > 25" diyerekte başlayabilirdik.
            return grade = "A"; //return grade = A deseydik A'ya tanımsız diyecekti o yüzden  A,B,C,D,E notlarını string şeklinde yazmayı unutma!
        }else if (score > 20 && score <= 25) {
            return grade = "B"; 
        
        }else if (score > 15 && score <= 20) {
            return grade = "C"; 
        
        }else if (score > 10 && score <= 15) {
            return grade = "D"; 
        
        }else if (score > 5 && score <= 10) {
            return grade = "E"; 
        
        }else if (score >= 0 && score <= 5) { // bunu direk " else grade = 'F' " diyede bitirebilirdik.
            return grade = "F"; 
        }
        return grade;
    }
 //*******************************************************************************************************************/
   


// Day 2: Conditional Statements: Switch

    // First Method

    // Write your code here
  switch(s.charAt(0)) {
    case 'a' : // Durumu yazdıktan sonra ":" koymayı unutma!
    case 'e' :
    case 'i' :
    case 'o' :
    case 'u' :
    letter = "A"
    break;
    
    case 'b' :
    case 'c' :
    case 'd' :
    case 'f' :
    case 'g' :
    letter = "B"
    break;
    
    case 'h' :
    case 'j' :
    case 'k' :
    case 'l' :
    case 'm' :
    letter = "C"
    break;
    
    case 'n' :
    case 'p' :
    case 'q' :
    case 'r' :
    case 's' :
    case 't' :
    case 'v' :
    case 'w' :
    case 'x' :
    case 'y' :
    case 'z' :
    letter = "D"
    break;
    }
  
    return letter;
}

// Second Method

  // Write your code here
  switch(true) {
    case 'aeiou'.includes(s[0]) : //string'in 0. indexinde aeiou'dan biri varsa letter = A demek.
    letter = "A"; 
    break;
    case 'bcdfg'.includes(s[0]) :
    letter = "B";
    break;
    case 'hjklm'.includes(s[0]) :
    letter = "C";
    break;
    case 'npqrstvwxyz'.includes(s[0]) :
    letter = "D";
    break;
}
return letter;
//*******************************************************************************************************************/




//Day 2: Loops

let vowels = 'aeiuo'
function vowelsAndConsonants(s) {
   for (var i = 0; i < s.length; i++) {
       
       if (vowels.includes(s[i])) {
           console.log(s[i]);
       } 
   } 
   for (var i = 0; i < s.length; i++) {
       
       if (!vowels.includes(s[i])) {
           console.log(s[i]);
}
}
}
//*******************************************************************************************************************/



// Day 3: Arrays

// First Method

function getSecondLargest(nums) {
    // Complete the function
    nums = new Set(nums);
    nums = Array.from(nums); // set'ten yeni bir array elde etmemize izin verir.
    nums.sort(comparator); 
    return nums[nums.length - 2] // -2 dememizin nedeni array'de sondan 0 ve 1. indexte 6 sayısı olması
}

function comparator(a,b) {
    return a-b; // Küçükten büyüğe doğru sıraladık | b-a deseydik büyükten küçüğe sıralamış olurduk.
    } 

// Second Method

function getSecondLargest(nums) {
    let largest = nums[0];
    let secondLargest = nums[0];
    
    for (let i = 1; i < nums.length; i++) { //Bu döngünün amacı en büyük sayıyı bulmak.
        if (nums[i] > largest) {
            secondLargest = largest;
            largest = nums[i];
            continue;
        }
        
        if ((nums[i] > secondLargest) && (nums[i] < largest)) { // Bu döngünün amacı ise en büyük sayıyı kullanarak en büyük ikinci sayıyı bulmak.
            secondLargest = nums[i];
        }
    }
    
    return secondLargest;
}
//*******************************************************************************************************************/




// Day 3: Try, Catch, and Finally

function reverseString(s) {
    try {
        s = s.split("").reverse().join("")  
         
  }catch(exception) { // exception burda temsili yani beklediğimiz hatayı temsil eder "error" da yazabilirdik
        console.log("s.split is not a function");
  
  }finally {
       console.log(s) 
    }
  
}
//try ve catch arasına çalışacak kodlar yazılır.

//catch ile finally arasına hata yakalandığında çalışacak kodlar yazılır.

//finally'den sonra ise try tamamlandıktan sonra hata olsada olmasada çalışacak kodlar yazılır.
//*******************************************************************************************************************/




// Day 3: Throw

function isPositive(a) {
    
    if (a > 0 ) {
        return "YES"
    }else if(a === 0) {
        throw Error("Zero Error")
    }else if(a < 0 ) {
        throw  Error("Negative Error")
    }
  }

// Burda throw'u özel bir hatayı belirtmek için kullandık. Yani biz bir duruma özel bir hata oluşturmak istiyorsak throw kullanabiliriz.
//*******************************************************************************************************************/




//Day 4: Create a Rectangle Object

//Method 1

function Rectangle(a, b) {
    return {
        length: a,
        width: b,
        perimeter: 2*(a + b),
        area: a*b 
    }
}

// Bizden bir obje oluşturup içersine istenen özellikleri atamamızı istedi, sonrasındada return ile oluşturduğumuz bilgileri geri döncez.

// Objelerde dikkat edilmesi gerekenler: Objenin içindeki özellikler veya methodlar virgül ile ayrılması gerekir ve son olusturulan özellikten sonra virgul konmaz.

// Unutma her fonksiyon bir nesnedir.
//*******************************************************************************************************************/




// Day 4: Count Objects

function getCount(objects) {
    let counter = 0;
    
    for(let i= 0; i< objects.length; i++) { 
        if (objects[i].x == objects[i].y) { 
           counter++; 
        }
      } 
      return counter;
   }

   //objects[i].x -> object parametresinin içindeki x değerinin i. index değeri demek.
//*******************************************************************************************************************/




// Day 4: Classes

// Bazen kullanabileceğimiz herhangi bir standart var mı diye merak ederiz aynı nesneyi üretmekten emin olmak için, manuel olarak tekrar ve tekrar yazmamak için.
// Bizden aşağıdaki property'leri içeren bir polygon class'ı olusturmamızı istedi.
//Çokgenin kenarlarının uzunluklarını tanımlayan bir dizi tam sayı değeri alan bir constructor tanımlamalıyız.
//Çokgenin çevresini return eden bir perimeter yöntemi tanımlamalıyız.

class Polygon { // Biz burda polygon classı olusturarak bütün çokgenler için bu işlemi yapabilir hale geldik. Hepsi için ayrı ayrı uğraşmıcaz.

    constructor(sides) {
        this.sides = sides; // Bir dizi tam sayı değerini almak için sides parametresini kullanarak sides property'sini olusturduk.

    }

    perimeter() { // perimeter methoduyla girilen sayıları topluyoruz.
    let sum = 0;
    for(let i=0; i< this.sides.length; i++) {
        sum = sum + this.sides[i]
    }
    return sum; 
    }
}
//Burda this'i sides parametresini ne ile eşitlemek istiyorsan onunla eşitlemek için kullandık.
// Perimeter methodda herhangi bir sey girmeme gerek yok, çünkü input property'nin kendisinde.
//*******************************************************************************************************************/




//Day 5: Inheritance

/*
 *  Write code that adds an 'area' method to the Rectangle class' prototype
 */
Rectangle.prototype.area = function() {
    return this.h * this.w
}
   
 // Reçeteli nesne üretmenin 2 yolu var biri prototype ikincisi new biz prototype ile Renctangle class'ına bir area methodu ekledik.   
      
/*
 * Create a Square class that inherits from Rectangle and implement its class constructor
 */

class Square extends Rectangle {
    constructor(w) {
        super(w,w)
    }
}

// extends ile Rectangle class'ının inheritance'ı yani mirascısı olan yani bütün özelliklerini alan Square class'ını olusturduk. 

// Burdaki rectangle superClass Square ise Subclass olarak tanımlanır. 
// Constructor ile subclassımıza superclass'ımızda olan nesnemizi atadık.
// super(w,w) diyerek sen git bunları super class'tan al ve superClass'ın methodunu uygula dedik.

//*******************************************************************************************************************/

// Day 5: Template Literals

function sides(literals, ...expressions) {
    let Area = expressions[0] // expressions'ın içinde tanımlı olan ifadeleri Area ve Perimeter olarak tanımladık.
    let Perimeter = expressions[1]
    let s1 = (Perimeter + islem(Area, Perimeter)) / 4
    let s2 = (Perimeter - islem(Area, Perimeter)) / 4
    return [s2, s1] // s2 ve s1 değerlerini küçükten büyüğe doğru sıralamamızı istiyor.
}
 function islem(Area, Perimeter) { // Area ve Perimeter parametrelerini kullanarak s1 ve s2 için ortak olan islemin fonksiyonunu olusturduk.
     return Math.sqrt(Math.pow(Perimeter,2)-(16 * Area))
 }
 
 //*******************************************************************************************************************/

 //Day 5: Arrow Functions
 
 // Method 1

 function modifyArray(nums) {
    let Array1 = function(n) {
        if(n % 2 == 0) 
        return n * 2 // tek işlem yaptığımız için süslü parantezin içine almadık.
        else 
        return n * 3
     }
     let Array2 = nums.map(Array1); // Bunun anlamı, nums dizisinin içindeki bilgileri al ve Array1 değişkenine ata ve map fonksiyonu yardımıyla Array1'e atadığın fonksiyonu kullanarak yeni bir Array2 dizisi elde et.
     return Array2
}

// map() fonksiyonunun olayı dizinin içindeki tüm elemanları tek tek döndürüp mevcut diziyi değiştirmeden yeni bir dizi elde etmek.

// Method 2
// Bu methodda arrow function ve ternary operator kullanalım.

function modifyArray(nums) {
    let Array1 = n => (n % 2 == 0) ? n * 2: n * 3 
    let Array2 = nums.map(Array1)
    return Array2
}

// arrow function kullanımında Array1 fonksiyonun ismi n ise paremetresidir.
// Ternary operator kullanımında kısaca n 2'ye bölünürse 2 ile bölünmezse 3 ile çarp dedik. Yani kısa if else gibi düşünebiliriz.

//Day 6: Bitwise Operators

// Önce soruyu anlayalım. Soruda verilen n değerini (1, 2, 3 ...n) şeklinde yazmamızı ve bu değerleri n'e kadar a < b olacak şekilde yazmamızı istiyor.
// Örneğin n = 3 için sol taraftakiler a'yı sağ taraftakiler b'yi temsil edecek şekilde.
// 1 - 2
// 1 - 3 
// 2 - 3 
// Yazmanızı istiyor.

// Örneğin 1 - 2 için 001 & 010 = 000 sonucu çıkıyor. Anlamadıysan ve operatörünün özelliklerini incele.

// Sonrasında ise çıkan sonucun k değerinden küçük olmasını istiyor. 
// Sorudaki tabloya baktığımızda n = 8 k = 5 için inceleyelim.
// 5'den küçük en büyük değer 4'tür.

// n = 2 k = 2 örneğine baktığımızda 2'den küçük en büyük değer 1 diye düşünebilirsiniz ama a ve b seklinde sıraladığımızda bunun 0 oldugunu görüyoruz çünkü n = 2.

// 1 - 2 şeklinde oluyor sadece oda 001 & 010 = 000 yani 0'dır.

// Geçelim Cevaba

function getMaxLessThanK(n, k) { // Hangi fonksiyonu olusturcağımızı öğrenmek için en alttaki satırı aç ve incele.
        let max = 0;
        for(let a = 1; a < n; a++) {
            for(let b = a+1; b <= n; b++) { 
                if((Number(a & b) < k) && (Number(a & b) > max)) {
                    max = a & b;
                }
              }
            }
            return max;
        }
// İki farklı for döngüsü olusturarak tablodaki 1-2, 1-3, 1-4... şeklinde belirtilen a ve b sayılarını oluşturduk burda b sayısının a sayısından büyük olmasına dikkat. 

// Sonrasında ise bizden istenen 2 farklı işlemi if döngüsü içersinde and operatörünü kullanarak oluşturduk.

 //******************************************************************************************************************/

 
// Day 6: JavaScript Dates

// Method 1

function getDayName(dateString) {
    let dates = new Date(dateString)
    let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let dayName = dayNames[dates.getDay()]
    return dayName;
    }

// JavaScript'te Gün atamasını new Date() ile yapıyoruz. 
// new Date() methodunu uygulayarak input'u dates değişkenine atadık.
// getDay() methodu belirtilen tarihin gün olarak sıramasını 0'dan başlayarak 6'ya kadar veriyor örneğin verilen tarih Pazartesi gününe denk geliyorsa çıktımız 1 oluyor. 

// Method 2

function getDayName(dateString) {
    let dayName;
    // Write your code here
    let dates = new Date(dateString)
    switch(dates.getDay()) {
        case 0 : dayName = "Sunday"; break;
        case 1 : dayName = "Monday"; break;
        case 2 : dayName = "Tuesday"; break;
        case 3 : dayName = "Wednesday"; break;
        case 4 : dayName = "Thursday"; break;
        case 5 : dayName = "Friday"; break;
        case 6 : dayName = "Saturday"; break;
    }
    return dayName;
}

// Day 7: Regular Expressions I

// Konu ile ilgili detaylı bilgiye Github -> JavaScript Konu Anlatımı -> Yeni Konular -> 3-Regular-Expressions-Regex-(Düzenli-ifadeler) başlıklarını takip ederek ulaşabilirsiniz.

// Regex ifadeleri her zaman iki eğik çizgi "/Regex ifadeleri/" arasında belirtilir.

// Method 1

function regexVar(str) {
        let re = /^([aeiou]).+\1$/;
        return re;
    }

// ^ ifade ile satır başını şeçer.

// () Şeçtiğimiz satır başında parantez kullanılarak parantezin içersinde eşleşen değer varsa saklanır.

// [] Köşeli parantez bizim bir aralık belirlememizi sağlar. Yani biz ^([aeiou]) diyerek satırın başında aeiou harflerinden biri var mı bak varsa seç demiş oluyoruz.

// Sonrasında ise .+ kullanarak . ile seçtiğimiz tüm karekterleri + ile birleşitiriyoruz. 

// \1 biraz önce ilk seçeceğimiz aeiou elemanlarının aynısından  bir tane daha varsa aralığı şeç demek. Yani a ile  baslıyorsa gene a olması lazım veya aeiou elemanları değilde 9 deseydik "987529" tamamını  secerdi. Ama regular expression ifadesini bu sekilde bırakırsak sıkıntı yasarız cunku "assdsdasds"  assdsda yı şeçer fakat biz baştaki ve sondakini seçmesini istiyoruz. Bu yüzden sonuna $ isaretini ekledik. Yani baştaki harf ile sondaki harf eşleşirse seç demiş olduk.

// Method 2

function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    
let re = /^(a|e|i|o|u).+\1$/ // Köşeli parantez'in yerine veya operatörünü kullanarak ayırdık.
    /*
     * Do not remove the return statement
     */
    return re;
}



















    






    











