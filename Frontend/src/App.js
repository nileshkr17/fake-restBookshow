import "./App.css";
import Allrouter from "./Router/Allrouter";
import React from "react";
import Nav from "./components/Nav";
import Banner from "./components/Banner";

function App() {
 

  return (
    <>
      <Nav />
      <Allrouter />
      <Banner />
      <Footer/>
    </>
  );
}

export default App;