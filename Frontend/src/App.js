import "./App.css";
import Allrouter from "./Router/Allrouter";
import React from "react";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
<<<<<<< HEAD
import Footer from "./components/Footer"
import { Card } from "./components/Card";
=======
import Footer from './components/Footer';
import Latest from "./components/Latest";
>>>>>>> 9621a231f2fe96102feb8c9829dde8ecb024abe5

function App() {
  return (
    <>
      <Nav />
      <Banner />
      <Latest/>
      <Allrouter />
      <Card></Card>
      <Footer/>
    </>
  );
}

export default App;