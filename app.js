// var a; //initialize
// a=55; //declare
// a=11; //redeclare

//console.log(a);

//const a=10;// initialize+ declare
//b = 55 //redeclare * error
//a = 10+a;

// var a = 55;  

//console.log(a + 10);


//*************** STRING *****************//

//prompt ---> pre defined function

//const content = prompt("Enter the number");

// console.log(content + 20); //concat
// console.log(content - 22); //naN--->Not a number //we cant use the other operators only +.

// let content = prompt("Enter name");
// content ="t";
// console.log(content)

//*************** NUMBERS *****************//
// const a=NaN;
// const b=10;
// console.log(a+b); //output: NaN

//*************** CONDITIONAL CLASSES *****************//

//truthy and falsy
// 0, NaN, Undefined, Null "" False -- Falsy values
// if( 10 === 10 ) {
//     console.log(true);
// }
// else{
//     console.log(false);
// }

// const onlyNumber = prompt("enter only a number");
// console.log(parseInt(onlyNumber)+10);
// if(!onlyNumber){
//     console.log("NaN");
// }


// const onlyNumber = prompt("enter only a number");
// if(onlyNumber){
//     console.log(onlyNumber -1);
// }
// else{
//     console.log("NaN");
// }


// const onlyNumber = prompt("Enter num");
// if (onlyNumber == Number(onlyNumber)) {
//     console.log(onlyNumber - 1);
// }
// else {
//     console.log(typeof (onlyNumber));
// }


// const message = prompt("Enter a string");

// if (message[0] == "!" && message[message.length - 1] == "!") {
//     console.log(true);
// } else {
//     console.log(false);
// }


//types of loops
// for(let i=1;i<=10;i++){
//     console.log(i);
// }   
// while(condition){
//     //code
// }
// let i=1;
// while(i<=10){
//     console.log(i);
//     i++;
// }
// do{
//     //code
// }while(condition);

// let i=1; 
// do{
//     console.log(i);
//     i++;
// }while(i<=10);
//print even numbers from 1 to 20
// for(let i=1;i<=20;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }
//print odd numbers from 1 to 20
// for(let i=1;i<=20;i++){
//     if(i%2!=0){
//         console.log(i);
//     }
// }
//largest numbers in array
// const numbers=[100,200,300,450,150];
// let largest=numbers[0];
// for(let i=1;i<numbers.length;i++){
//     if(numbers[i]>largest){
//         largest=numbers[i];
//     }
// }
//prime numbers
// const num=prompt("Enter a number");
// let isPrime=true;
// for(let i=2;i<=num-1;i++){ 
//     if(num%i==0){
//         isPrime=false;
//         break;
//     }
// }
// if(isPrime){
//     console.log("prime");
// }
// else{
//     console.log("not prime"); 
// } 


  // }
//objects
//   const obj = {fruit:"apple", price:20, color:"red"};
// obj["color type"]= "red";
// const test= "fruit";
// console.log(obj);

//**********************functions************************//

// function greet(name){
//     return ("Hello "+ name);
// }

// //function call

// const practice = greet("John");
//     console.log(practice);

//     //funtion arrow

//     const greetArrow = (a, b, c) => a + b + c;
//     const result = greetArrow(10, 20, 30);
//     console.log(result);

    //higher order functions

//     function add(a,b){
//         return a+b;
//     }
//     const square = (one,,e) => {
//        const sum = one(w,e);
//         return sum**2;
//     }
// console.log(squre(add, 2, 3));
                                                                         //homework
//                                                                       //shallow copy, deep copy,filter,reduce ,call back hell

