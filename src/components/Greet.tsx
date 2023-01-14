import React from "react";

type GreetProps = {
  name: string;
  age?: number;
  status: "online" | "offline";
};

const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2>Hello, {props.name} is {props.status}</h2>
    </div>
  );
};

export default Greet;
