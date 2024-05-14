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


function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  const member = new Person('Lydia', 'Hallie');
  Person.getFullName = ()=> {
    return `${this.firstName} ${this.lastName}`;
  };
  
//   console.log(member.getFullName());


  class car{
    tyre(){
        console.log("Tyres are running")
    }
  }

  let carData = new car()
  carData.tyre();
  carData.wheel = ()=>{
    console.log("One wheel is running");
  }
  carData.wheel();