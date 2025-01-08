import React, { useState } from "react"; // Import useState here
import CustomCursor from "./componentss/CustomCursor";
// import Header from "./componentss/Header";
// import PicketFence from "./componentss/PicketFence";
import DirectionalSign from "./componentss/DirectionalSign";
import Hero from "./componentss/Sections/Hero";
import About from "./componentss/Sections/About";
import Contact from "./componentss/Sections/Contact";
import LoadingScreen from "./componentss/LoadingScreen";
// import GlitterEffect from "./componentss/GlitterEffect";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="App">
      {isLoading ? (
        <LoadingScreen onComplete={handleLoadingComplete} />
      ) : (
        <>
          <CustomCursor />
          {/* <GlitterEffect /> */}
          <DirectionalSign />
          <main>
          <Hero/>
            <section id="about">
              <About />
            </section>
            <section id="contact">
              <Contact />
            </section>
          </main>
        </>
      )}
    </div>
  );
}

export default App;
