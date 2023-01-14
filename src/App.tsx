import React from "react";
import "./App.css";
import Button from "./components/Button";
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
      <Button handleClick={(e) => console.log("clicked", e, 111)} />
      <TextInput value="" onChange={(e) => console.log(e)} />
    </div>
  );
}

export default App;
