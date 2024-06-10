import React from "react";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <div className='min-h-screen flex flex-col'>
      <div className='flex-grow'>{/* Other components */}</div>
      <Footer />
    </div>
  );
}

export default App;
