import "./App.css";
import Allrouter from "./Router/Allrouter";
import React from "react";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Footer from './components/Footer';
import Latest from "./components/Latest";
import Buy from "./pages/Buy";


function App() {
  return (
    <>
      <Nav />
      <Banner />
      <Latest/>
      <Allrouter />
      <Buy></Buy>
      <Footer/>
    </>
  );
}

export default App;