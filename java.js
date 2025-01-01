let x = 10;
x += 5;
document.getElementById("demo").innerHTML = "Value of x is: " + x;

let a = 20;
a += 5;
document.getElementById("demo").innerHTML = "Value of a is: " + a;


let answer1 = "It's alright";
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"';

document.getElementById("demo").innerHTML =
answer1 + "<br>" + 
answer2 + "<br>" + 
answer3;

function myFunction(p1, p2) {
    return p1 * p2;
  }
  
  let result = myFunction(4, 3);
  document.getElementById("demo").innerHTML = result;

  function Person(first, last, age, eye){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.fullName = function(){
        return this.firstName + " " + this.lastName
    };
  }
  const myFather = new Person("John" , "Doe" , 50 , "blue");
  document.getElementById("demo").innerHTML = "My father is " + myFather.fullName();

  //const cars = ["saab" , "volvo" , "BMW"];
  //document.getElementById("demo").innerHTML = cars;

  const fruits = ["Banana" , "Orange", "Apple" , "mango"];
  document.getElementById("demo").innerHTML =  fruits.toString();

 if(new Date().getHours() < 18){
    document.getElementById("demo").innerHTML = "Good day!";
 }

 /*let text = "";
 for (let i = 0; i<10; i++){
    if(i === 5) { break; }
    text += "The number is  " + i + "  <br >";
 }
 document.getElementById("demo").innerHTML = text; */

 const cars = ["BMw","Volvo","Saab","Ford","Fiat","Audi"];
 let text = "";
 for (let i = 0; i < cars.length; i++)
 {
    text += cars[i] + "<br>";
 }
 document.getElementById("demo").innerHTML = text;


 let ttext = "";
 for (let i = 0; i<5; i++){
    ttext += "The number is " + i + "<br>";
 }
 document.getElementById("demo").innerHTML = ttext;

 let car = " ";
 document.getElementById("demo").innerHTML = "The value is: " + car + "<br>" + "The type is : " + typeof car;

 class Car {
    constructor(name, year) 
    {
        this.name = name;
        this.year = year;
    }
    age() {
        const date = new Date();
        return date.getFullYear()-this.year;
    }
 }
 /*
 const myCar = new Car("Ford", 2014);
 document.getElementById("demo").innerHTML = "My car is " + myCar.age() + " years old";

 const person = {
   fullName: function(city, country){
      return this.firstName + " " + this.lastName + "," + city + "," + country;

   }
 }  
 */
 const person1 = {
   firstName:"John",
   lastName: "Doe"
 }
 document.getElementById("demo").innerHTML = person.fullName.apply(person1, ["Oslo","Norway"]);

 class Car {
   constructor(brand) {
      this.carname = brand;
   }
   present() {
      return 'I have a ' + this.carname;
   }
 }
 class Model extends Car {
   constructor(brand, mod) {
      super(brand);
      this.model = mod;
   }
   show() {
      return this.present() + ' , it is a ' + this.model;
   }
 }
 const myCar = new Model("Ford"," mustang");
 document.getElementById("demo").innerHTML = myCar.show();