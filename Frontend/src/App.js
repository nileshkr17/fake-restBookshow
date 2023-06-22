import "./App.css";
import Allrouter from "./Router/Allrouter";
import React from "react";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Footer from './components/Footer';

function App() {
 

  return (
    <>
      <Nav />
      <Banner />
      <Allrouter />
      <Footer/>
    </>
  );
}

export default App;