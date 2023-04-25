import React from "react";
import ServiceAdd from "./components/Form/ServiceForm.jsx";
import ServiceList from "./components/List/ServiceList.jsx";
import ServiceFilter from "./components/Filter/ServiceFilter.jsx";

function App() {
  return (
    <>
      <ServiceAdd />
      <ServiceList />
      <ServiceFilter />
    </>
  );
}

export default App;