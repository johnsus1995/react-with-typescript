import React from "react";
import "./App.css";
import Button from "./components/Button";
import Container from "./components/Container";
import General from "./components/General";
import Person from "./components/Person";
import TextInput from "./components/TextInput";

function App() {
  // const onClick = (event:React.MouseEvent) => {
  //   console.log("btn clicked",event,1);
  // };

  const people = [
    { firstName: "Diana", lastName: "Phillips" },
    { firstName: "Bruce", lastName: "Wayne" },
  ];

  return (
    <div className="App">
      <General>
        <h1>Hi</h1>
      </General>
      <Person names={people}/>
    </div>
  );
}

export default App;
