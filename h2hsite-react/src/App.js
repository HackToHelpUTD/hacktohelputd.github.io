import React from "react";
import "./App.scss";
import Footer from "./components/Footer";
import OurFriends from "./components/OurFriends";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <OurFriends />
      <Footer />
    </div>
  );
}

export default App;
