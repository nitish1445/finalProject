import React from "react";
import Register from "./pages/Register";
import Header from "./components/Header";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster />
      <Header />
      <Register />
    </>
  );
}

export default App;
