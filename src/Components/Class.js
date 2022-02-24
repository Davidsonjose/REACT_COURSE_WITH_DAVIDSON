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
class Car extends Component{
    render(){
        return(
            <div>i love color {this.props.title}</div>
        )
    }
}
// function Car(props) {
//     console.log(props);
//     return(
//         <div>
//            <p>{props.title}</p>
//         </div>
//     )
// }

export default Car;
