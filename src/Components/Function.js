// Allo = function(name) {
//     return <p> `${name}` + is the best Dev</p>;
// }

//  Hello = (name)=>{
//     return <p> `${name}` is a programmer</p>
// }

//array

const myArray = ["Lanre", "Onobajo", "Olarewaju"];
// console.log(my)

// myArray.map((data) => {
//   // console.log(data);
//   return <p>{data}</p>;
// });

//array destructuring
//old way of destructuring an array
// const car = myArray[0];
// const firstname = myArray[1];
// const lastname = myArray[2];

//new way of destructing
const [car, name, lastname] = myArray;
console.log(car);

//arithmetic operators
function Cal(a, b) {
  const add = a + b;
  const sub = a - b;
  const div = a / b;
  const multi = a * b;

  return [add, sub, div, multi];
}

// const [add, sub, div, multi] =Cal(10, 2);
// console.log(add);
// console.log(sub);
// console.log(div);

// //SPREAD OPERATORS
// const numberOne = [1, 2, 3];
// const numberTwo = [5, 1, 4];

// const numberSpreadOperator = [...numberOne, ...numberTwo];
// console.log(numberSpreadOperator);

// const unberOne = [1, 2, 3, 4, 5];

// const [numberOne, numberTwo, ...rest] = unberOne;
// console.log(unberOne);

//exporting
//  const name = 5;

//  const about = 'lanre'

// export {
//     name,
//     about
// }

//or
// export const name = 5;

// export const about = 'lanre'

//tenary operator
const lanre = "A boy";

//old version
// if (lanre == 'A boy') {
//     console.log("That boy lanre eeehn is not wise")
// }else{
//     console.log("That guy dey code like");
// }

//tenary operator
lanre == "A boy"
  ? console.log("That boy lanre eehn")
  : console.log("Guy abeg shift");

const authenticated = false;

const renderApp = "Yo Bro welcome to the page";
const renderLogin =
  "Welcome to the login page kindly login to gain access to the route you requested for";

authenticated ? console.log(renderApp) : console.log(renderLogin);