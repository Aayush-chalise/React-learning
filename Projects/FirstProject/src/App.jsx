import React from "react";
import MyForm from "./components/MyForm";
import RegisteredName from "./components/RegisteredName";

const App = () => {
  return (
    <div className="app-container  flex flex-col lg:flex-row justify-center border-2 border-green-500">
      <section className="border-2 border-gray-500 lg:mx-auto">
        <MyForm />
      </section>
      <section>
        <RegisteredName />
      </section>
    </div>
  );
};

export default App;
