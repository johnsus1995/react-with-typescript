import React from "react";
import { Name } from "./Person.type";

type personProps = {
  names: Name[];
};

const Person = ({ names }: personProps) => {
  console.log(names);
  return (
    <div>
      {names.map((name) => (
        <h1>
          {name.firstName} {name.lastName}
        </h1>
      ))}
    </div>
  );
};

export default Person;
