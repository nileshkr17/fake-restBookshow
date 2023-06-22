import "./App.css";
import Allrouter from "./Router/Allrouter";
import React from "react";
import Nav from "./components/Nav";
import Footer from './components/Footer';



function App() {
  return (
    <>
      <Nav />
      <Allrouter />
      <Footer/>
    </>
  );
}

export default App;