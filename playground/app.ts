// Type System

// var x = "Some String";
// console.log(typeof x);

// x = 10;
// console.log(typeof x);

// x = true;
// console.log(typeof x);



// Destructuring : Object & Array

// var arr = ["foo", 'bar', "bam"];

// var [arr1, arr2, arr3] = arr;

// console.log(arr3);              // ?

// var myModule = {
//     firstName : "Foo",
//     lastName : "Bar",
//     getFullName : function(){
//         console.log("Hello from FullName!");
//     }
// }

// var {firstName : fn, lastName : ln, getFullName} = myModule;
// console.log(fn, ln);
// getFullName();


// TO DO
// Nested Destructuring
// var user = {
//     address : {
//         street : "201 Main Road",
//         city : "Mumbai"
//     },
//     friends : ["Foo", "Bar", "Bam"]
// }


// Template String syntax : back ticks (``)
// - write multiline string
// - embed the variable without using concatenation operator(+)

// var username = "Sumit Khandelwal";
// console.log(`Hello 

// from

// ${username}`);


// Block Scoping
// - let : rest of the variables
// - const : constant variables

// function demo(arr){
//     if(arr.length > 2){
//         let load = "LOADING";
//         console.log(flash);                 // Reference Error
//     }else{
//         let flash = "Flashing";
//     }
// }

// demo([1,2,3,4]);

// const MAGIC_NUMBER = Math.round(Math.random() * 10);

// console.log(MAGIC_NUMBER)       // 
// MAGIC_NUMBER = 12;


// const != immutable

// const USER = {
//     fname : "Foo"
// }

// USER.fname = "Bar";

// console.log(USER);


// Arrow Functions ()=>{}
// - short syntax
// - don't have 'this' keyword

//ES5 JS Code
// let numbers = [2, 3, 4, 5, 6];

// var doubleValueArray = numbers.map(function (value, index, array) {
//     return value * 2;
// })

// ES6 Arrow fucntion
// var tripleValueArray = numbers.map(value => value * 3);

// console.log(doubleValueArray, tripleValueArray);



// var user = {
//     firstName : "Foo",
//     lastName : "Bar",
//     sayHello : function(){

//         let nestedFunc = () => {
//             return "Hello " + this.firstName + " " + this.lastName;
//         }
//         return nestedFunc();

//         // var self = this;
//         // function nestedFunc(){
//         //     return "Hello " + self.firstName + " " + self.lastName;
//         // }
//         // return nestedFunc();
//     }
// }

// console.log(user.sayHello());



// Spread & Rest Operator (...)
// spread operator spreads the collection into individual elements
// rest operator creates the collection from individual elements
// - rest param must be last parameter supplied to function


// let num = [3, 4, 5];
// let newArr = [1, 2, ...num, 6, 7];
// console.log(newArr);            // ?

// function demo(name, ...params){
//     console.log(params[1]);         // ?
// }

// demo("foo");
// demo("foo", 32);
// demo("foo", 32, true);

// Classes & Modules
// import { Student } from './student';
// import { Person } from './person';

// let person : Person = {
//     firstName : "Foo1",
//     lastName : "Bar1",
//     age : 34
// }
// let foo = new Student(person);
// console.log(foo.sayHi());


// Additional Types : enum, void, any


// class Foo{}
// class Bar{}

// class Bam{
//     // foo : Foo;
//     constructor(private foo : Foo, bar : Bar){
//         // this.foo = foo;
//     }
//     greet(){
//         this.foo
//     }
// }

// new Bam(new Foo(), new Bar());




// Decorators : 
    // - simple function which supplies the meta information. 
    // - always prefixed with '@'
    // - Types of Decorators    
        // -class : @Component(), @Pipe(), @Directive(), @NgModule(), @Injectable()
        // -method : @HostListener()
        // -property : @Input(), @Output(), @HostBinding() @ViewChild(), @ContentChild()
        // -parameter : @Inject(), @Optional