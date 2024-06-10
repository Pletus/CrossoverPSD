import "./App.css";
import React from "react";
import Happy from "./components/Happy";
import Footer from "./components/Footer";
import Body from "./components/Body";

function App() {
  return (
    <div className='p-4 md:p-6 lg:p-10'>
      <Happy />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
