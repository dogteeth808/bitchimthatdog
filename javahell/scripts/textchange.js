// variable defining
let firstName = "Jade ", middleName = "Sylvia ", lastName = "McMints";
let x = 0;

const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

const car = {type:"Fiat", model:"500", color:"white"};
car.type = "epic car";
car.color = "red";
car.owner = "Johnson";
// document.getElementById("demo4").innerHTML = car.owner;

function myFunction() {
  //turns demo into whatever i want
  document.getElementById("demo").innerText = "boom!!!!!!!!!!";
  //displays the "myname" variable
  document.getElementById("demo2").innerText = firstName + middleName + lastName;
}

function increment() {
  x++;
  document.getElementById("demo3").innerText = x;
}

function dogteethTheme() {
  x++;
  document.getElementById("demo3").innerText = x;
}