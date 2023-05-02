// console.log("hello world");
// // var let const
// var a= 10;
// console.log(a);
// var a=20;
// console.log(a);

// {let b=23;
// console.log(b);
// }
// //if not in block eror canot change let 
// let b=10;
// console.log(b);

// let a=10;
// let b=20;
// console.log(a+b);
// console.log(b/a);
// console.log(b-a);
// c=a*b;
// console.log(c);
// console.log(b/a);

// let a=10;
// let b="10";
// if(a===b){// triple = also check datatype doble= no datatype
//     console.log(true);
// }else{
//     console.log(false);
// }

// let f="austin";
// let g="siju";
// let fn=f+g;
// console.log(fn);
// console.log(`${f} ${g}`);

// let car={
//     model:"alto",
//     color:"red",
//     price:1000000
// }
// console.log(car)
// console.log(car.color)
// console.log(`${car.model} ${car.color}`)

// let person={
//     name:"aadi",
//     college:"christ",
//     class:"s4",
//     address:{
//         hosename:"kalaparambil",
//         street:"abc"
//     }
// }
// console.log(person)
// console.log(person.name)
// console.log(`${person.name} ${person.class}`)
// console.log(`${person.name} ${person.address.hosename}`)

// // array
// let fruits=["appe","mango",10]
// console.log(fruits);
// console.log(fruits[0]);
// console.log(fruits.length);
// fruits[3]="grapes";
// fruits.push("pineaple");
// console.log(fruits);
// fruits.unshift("dragon fruit");
// console.log(fruits);
// fruits.pop();
// console.log(fruits);
// fruits.shift();
// console.log(fruits)

// let todo=[
//     {
//         id:1,
//         task:"buy book"
// },
//     {
//         id:2,
//         task:"hide"
//     },
//     {
//         id:3,
//         task:"play"
//     }
// ]
// console.log(todo)
// console.log(todo[1].task)

// function addition( a, b){
//     console.log(a+b);
// }
// function subtract(a,b){
//     console.log(a-b);
// }    
// subtract(50,49);
// addition(10,20);

// add = (a,b) => {
// console.log(a+b);
// }
// add(10,30)

// prog=(a,b)=>{
//     if((a+b)>10){
//     console.log("greater");}
//     else{
//         console.log("lesser");
//     }
// }
// prog(2,5)

let a=[1,2,3,4,5,6,7,8,9,10];
console.log(a);
print=(a)=>{
    for(i=0;i<10;i++){
        console.log(a[i]);
    }
}
print1=(a)=>{
    i=0;
    while(i<a.length)
    {
        console.log(a[i]);
        i++
    }
}
print2=(a)=>{
    i=0;
    do
    {
        console.log(a[i]);
        i++
    }while(i<10);
}
print(a);
print1(a);
print2(a);