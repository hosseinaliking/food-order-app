import { useState } from "react";
import FoodContextProvider from "./context/FoodContextProvider";

import "./App.css";
import Hero from "./components/Hero/Hero";
import Nav from "./components/Nav/Nav";
import Food from "./components/Food/Food";

function App() {
  return (
    <FoodContextProvider>
      <div className="App">
        <Nav />
        <Hero />
        <Food />
      </div>
    </FoodContextProvider>
  );
}

export default App;
