// // function is also object {true or false} ----- false

// function fn(){}

// // console.log(fn == Object);


// // check number or number object

// let a = 5;
// let b = new Number(5);

// console.log(a==b);  // true
// console.log(a===b);  // false

// // null is object or not ----

// const check = typeof null == Object
// console.log(check)  // false

// // what is type of null

// console.log(typeof null);


// // what is type of array

// console.log(typeof Array); // return function

// // what is type of funtion

// console.log(typeof function(){});  // return function


// // check type of object

// console.log(typeof {});


// var x = 24;
// var y = "Hello";
// console.log(x + y);  // Returns "24Hello"; 


// var x = 0;
// var y = 23;

// if(x) { console.log(x) }   // The code inside this block will not run since the value of x is 0(Falsy)  

// if(y) { console.log(y) }    // The code inside this block will run since the value of y is 23 (Truthy)


///////////////////////////////////////////////////////////////////

// const shape = {
//     radius: 10,
//     diameter() {
//       return this.radius * 2;
//     },
//     perimeter: () => 2 * Math.PI * this.radius,
//   };

//   console.log(shape.diameter());
//   console.log(shape.perimeter());


/////////////////////////////////////////////////////////


// console.log(+true)
// console.log(!'Lydia');


////////////////////////////////////////////////////////

// let c = { greeting: 'Hey!' };
// let d;

// d = c;
// c.greeting = 'Hello';
// console.log(d.greeting);

//////////////////////////////////////////////////////

// class Chameleon {
//     static colorChange(newColor) {
//       this.newColor = newColor;
//       return this.newColor;
//     }

//     constructor({ newColor = 'green' } = {}) {
//       this.newColor = newColor;
//     }
//   }

//   const freddie = new Chameleon({ newColor: 'purple' });
//   console.log(freddie.colorChange('orange'));


////////////////////////////////////////////////////////////

// let greeting;
// greetign = {}; // Typo!
// console.log(greetign);


////////////////////////////////////////////////////////////

// function bark() {
//     console.log('Woof!');
//   }

//   bark.animal = 'dog';


/////////////////////////////////////////////////////////////


// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   const member = new Person('Lydia', 'Hallie');
//   Person.getFullName = ()=> {
//     return `${this.firstName} ${this.lastName}`;
//   };

// //   console.log(member.getFullName());


//   class car{
//     tyre(){
//         console.log("Tyres are running")
//     }
//   }

//   let carData = new car()
//   carData.tyre();
//   carData.wheel = ()=>{
//     console.log("One wheel is running");
//   }
//   carData.wheel();



////////////////////////////////////////////////////


// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;

//     // not return any value
    
// }

// const lydia = new Person('Lydia', 'Hallie');
// const sarah = Person('Sarah', 'Smith');

// console.log(lydia);
// console.log(sarah);


// function sum(a, b) {
//     return a + b;
//   }
  
//   sum(1, '2');  // return but not print any things

/////////////////////////////////////////////////////////

// function getPersonInfo(one, two, three) {
//     console.log(one);
//     console.log(two);
//     console.log(three);
//   }
  
//   const person = 'Lydia';
//   const age = 21;
  
//   getPersonInfo`${person} is ${age} years old`;


//////////////////////////////////////////////////////////////


// function checkAge(data) {
//     if (data === { age: 18 }) {
//       console.log('You are an adult!');
//     } else if (data == { age: 18 }) {
//       console.log('You are still an adult.');
//     } else {
//       console.log(`Hmm.. You don't have an age I guess`);
//     }
//   }
  
//   checkAge({ age: 18 });


//   check by reference not value

//////////////////////////////////////////////////////////////


// function getAge(...args) {
//     console.log(typeof args);
//   }
  
//   getAge([]);



////////////////////////////////////////////////////////////////


// function getAge() {
//     'use strict';
//     age = 21;
//     console.log(age);
//   }
  
//   getAge();


// console.log(eval('10*10+5'));

// sessionStorage.setItem('cool_secret', 123);


// const person = { name: 'Lydia' };

// function sayHi(age) {
//   return `${this.name} is ${age}`;
// }

// console.log(sayHi.call(person, 21));
// console.log(sayHi.bind(person, 21));


// function sayHi() {
//     return (() => 0)();
//   }
  
//   console.log(typeof sayHi());


////////////////////////////////////////////



// const numbers = [1, 2, 3];
// numbers[10] = 11;
// console.log(numbers);



// const a = [[0, 1], [2, 3]].reduce(
//     (acc, cur) => {
//       return acc.concat(cur);
//     },
//     [1, 2],
//   );

//   console.log(a);



// function* generator(i) {
//     yield i;
//     yield i * 2;
//   }
  
// //   const gen = generator(10);
  
// //   console.log(gen.next().value);
// //   console.log(gen.next().value);


// // const arr = [1,2,3,4,56,5,5,5,5,5,48,8489,49,4,9,4];


// // deep copy and shallow copy


// // Deep Copy because primative data type always 
// let originalValue = 10
// let copyValue = originalValue

// console.log(originalValue);
// console.log(copyValue);


// copyValue = 100


// console.log(originalValue);
// console.log(copyValue);


//  var obj = {name:"sumit"}

//  function sayHi(){
//     return "hii " + this.name;
//  }


//  console.log(sayHi.call(obj));

 
//  var obj = {name:"sumit"}

//  function sayHi(age ,profession){
//     return "hii " + this.name + " is " + age + " and is an " + profession;
//  }


//  console.log(sayHi.apply(obj ,[24, "Software Engineer"] ));



//  var obj = {name:"sumit"}

//  function sayHi(age ,profession){
//     return "hii " + this.name + " is " + age + " and is an " + profession;
//  }

//  const bindFunc = sayHi.bind(obj);

//  console.log(bindFunc(24, "Software Engineer"));
//  console.log(bindFunc(21, "youtuber"));