import React from "react";
import "./App.css";
import Button from "./components/Button";
import Container from "./components/Container";
import General from "./components/General";
import TextInput from "./components/TextInput";

function App() {
  // const onClick = (event:React.MouseEvent) => {
  //   console.log("btn clicked",event,1);
  // };

  return (
    <div className="App">
      <General>
        <h1>Hi</h1>
      </General>
      <Container style={{ padding: "5px", color: "red" }} /> 
    </div>
  );
}

export default App;
