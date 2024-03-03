import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement =>  ReactElement(JS object)  => HTMLElement(render) Browser Understands

// const heading = React.createElement("h1", { id: "heading" }, "Namaste React!");

// console.log(heading); // object

// JSX(transpiled before it reaches the js) - Parcel - Babel

// JSX(babel) => Babel transpiles it to React.createElement =>  ReactElement(JS object)  => HTMLElement(render) Browser Understands

// const title = <h1 id="heading">Namaste React Using JSX</h1> // React Element

//Functitonal Component Using Return
// const Title = () => {
//   return (
//     <div id="TitleContainer">
//       <h1 id="heading">Namaste React Using JSX return</h1>;
//     </div>
//   );
// };

// Funcitonal Component with Normal Function
// function Title() {
//   return <h1 id="heading">Namaste React Using JSX Normal Funciton </h1>;
// }

// Funcitonal Component with Normal Function
// const Title = function () {
//   return <h1 id="heading">Namaste React Using JSX Normal Funciton </h1>;
// };

// Functional Component Without Return
const Title = () => <h1 id="heading">Namaste React Using JSX</h1>;

const elem = <h1>hi this is normal element</h1>;

const title = (
  <div>
    This is title heading
    {elem}
  </div>
);

//JSX sanitize all JS code written inside {} parenthesis and prevents XSS cross site scripting attacks.

// Component Composition
// 3 ways to call a component
const HeadingComponent = () => (
  <div id="Container">
    {Title()}
    <Title />
    <Title></Title>
    <h1 id="heading">Namaste React Functional Component</h1>
  </div>
);

// console.log(<HeadingComponent />); // object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
// root.render(title);
