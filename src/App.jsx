import React from "react";
import CustomCursor from "./componentss/CustomCursor";
import Header from "./componentss/Header";
import Hero from "./componentss/Sections/Hero";
import About from "./componentss/Sections/About";
import Contact from "./componentss/Sections/Contact";

function App() {
  return (
    <div className="App">
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;
