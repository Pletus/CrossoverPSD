import "./App.css";
import React from "react";
import Body from "./components/Body";
import Happy from "./components/Happy";
import Footer from "./components/Footer";

function App() {
  return (
    <div className='min-h-screen flex flex-col'>
      <div className='flex-grow'>
        <Happy />
        <Body />
        <Footer />
      </div>
    </div>
  );
}

export default App;
