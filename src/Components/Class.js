// import react from "react";

// class Car {
//   constructor(carName) {
//     this.brand = carName;
//   }

//   present() {
//     return "this is a" + " " + this.brand;
//   }
// }

// class Model extends Car {
//   constructor(name, mode) {
//     super(name);
//     this.model = mode;
//   }

//   show() {
//     return this.present() + ", it is a" + " " + this.model;
//   }
// }

// const sentence = new Model('Ford', "Mustarg");

// console.log(sentence.show());

// const carSaying = new Car("Ford");
// // console.log(carSaying.present());
// // // console.log(carSaying);

// // React class component

// export default Car;

//creating our first class component

import React, { Component } from "react";

// class Car extends Component {
//   constructor() {
//     super();
//     this.state = { color: "red" };
//   }
//   render() {
//     return (
//       <div>
//         <p>I love color {this.state.color}</p>
//       </div>
//     );
//   }
// }

//props
// class Car extends Component{
//     constructor(props){
//         super(props)
//     }
//     render(){
//         return(
//             <div>
//                 <p>{this.props.title}</p>
//             </div>
//         )
//     }
// }

// function Car(props) {
//     console.log(props);
//     return(
//         <div>
//            <p>{props.title}</p>
//         </div>
//     )
// }

//es6 eventlistner
// function Car() {

//     const shoot = (()=>{
//         alert("You score successfully")
//     });
//     return(
//         <div>
//             <button onClick={shoot}>Shoot the ball</button>
//         </div>
//     )
// }

// function Car() {

//     // const shoot = (()=>{
//     //     alert("You score successfully")
//     // });
//     return(
//         <div>
//             <button onClick={(()=>{alert("Man united won the uefa champions league 2022")})}>Who won the ucl in 2022</button>
//         </div>
//     )
// }

function MissedGoal() {
  return (
    <div>
      <h1>Missed</h1>
    </div>
  );
}

function ScoredGoal() {
  return (
    <div>
      <h1>Scored</h1>
    </div>
  );
}

// function Car(props) {
//     const isGoal = props.real;
//     if (isGoal) {
//         return(
//             <div>
//                 <ScoredGoal />
//             </div>
//         )
//     }else{
//         return(
//             <div>
//                 <MissedGoal />
//             </div>
//         )
//     }
// }

// function Car(props) {
//     const arraysLenght = props.array.length;
//     return(
//         <div>
//             <h1>{arraysLenght}</h1>
//         </div>
//     )
// }

// function Car() {
//     const arrays = ['Home', 'About', 'Blog', 'Contact'];
//     return(
//         <div>
//             {arrays.map((data)=>{
//                return(
//                    <ul>{data}</ul>
//                )
//             })}
//         </div>
//     )
// }

function Car(params) {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("The name you entered was: " + `${name}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
            Name: 
        </label>
          <input
            type="email"
            name="name"
            value={text}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        <input type="submit" />
      </form>
    </div>
  );
}

//forms ES6

export default Car;
