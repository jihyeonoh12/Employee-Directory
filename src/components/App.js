import React from "react";
import Card from "./Card";
import employees from "../employeeinfo";

function createCard(employeeInfo) {
  return (
    <Card
      key={employeeInfo.id}
      name={employeeInfo.name}
      img={employeeInfo.imgURL}
      dept={employeeInfo.department}
      tel={employeeInfo.phone}
      email={employeeInfo.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">Employee Directory</h1>
      {employees.map(createCard)}

      
    </div>
  );
}

export default App;
