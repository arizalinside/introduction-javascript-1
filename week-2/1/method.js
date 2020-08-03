/*
JavaScript Built-in Functions

1. sort()
    Mengurutkan elemen dari array.
    let fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.sort();
    //output: Apple,Banana,Mango,Orange

2. map()
    Merubah semua elemen di dalam suatu array menjadi elemen dengan nilai yang baru
    let numbers = [1,2,3,4,5];
 
    let newNumbers = numbers.map(function(number){
     return number * 2;
    });
 
    console.log(newNumbers);
    //output: [2, 4, 6, 8, 10]

3. length()
    Mengembalikan panjang string
    let myName = "Arizal"
    console.log(myName.length)
    //output: 6

4. filter()
    Memfilter sebuah data
    let numbers = [1, 3, 6, 8, 11];

    let lucky = numbers.filter(function(number) {
     return number > 7;
     console.log(lucky)
    });
    //output: 8, 11

5. push()
    Menambahkan satu atau lebih nilai baru ke akhir array
    let fruits = ["Banana", "Orange", "Apple", "Mango"];
    let fruit = fruits.push("Kiwi");
    console.log(fruit)
    //output: ["Banana", "Orange", "Apple", "Mango", "Kiwi"]

6. slice()
    Memotong/mengekstrak array menjadi array baru
    let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
    let citrus = fruits.slice(1, 3);
    console.log(citrus)
    //output: Orange, Lemon

7. toUpperCase()
    Merubah nilai string menjadi huruf besar semua
    let str = "Hello World!";
    let res = str.toUpperCase();
    console.log(res);
    //output: HELLO WORLD!

8. toLowerCase()
    Merubah nilai string menjadi huruf kecil semua
    let str = "Hello World!";
    let res = "str.toLowerCase();
    console.log(res);
    //output: hello world!

9. join()
    Menggabungkan semua elemen array menjadi string
    let fruits = ["Banana", "Orange", "Apple", "Mango"];
    let fruit = fruits.join();
    console.log(fruit)
    //output: Banana, Orange, Apple, Mango

10. reverse()
    Membalikkan urutan elemen array dari yang terakhir menjadi pertama dan sebaliknya
    let fruits = ["Banana", "Orange", "Apple", "Mango"];
    let fruit = fruits.reverse();
    console.log(fruit)
    //output: ["Mango", "Apple", "Orange", "Banana"]
*/
