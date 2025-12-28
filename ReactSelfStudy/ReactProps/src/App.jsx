import React from "react";
import Product from "./components/Product";
import MsgBox from "./components/MsgBox";

function App() {
  return (
    <>
      <MsgBox userName="Nitish Kumar" userColor="red"/>
      <MsgBox userName="Rakhi Rani" userColor="green"/>
      <Product />
    </>
  );
}

export default App;
