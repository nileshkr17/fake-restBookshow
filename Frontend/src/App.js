import "./App.css";
import Allrouter from "./Router/Allrouter";
import React from "react";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Footer from "./components/Footer"
import { Card } from "./components/Card";

function App() {
 

  return (
    <>
      <Nav />
      <Banner />
      <Allrouter />
      <Card></Card>
      <Footer/>
    </>
  );
}

export default App;