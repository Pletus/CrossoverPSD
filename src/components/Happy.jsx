import React from "react";
import "../App.css";
import box from '../assets/images/box.png';

function Happy() {
  return (
    <section className="background-image flex flex-col gap-2 md:gap-4 justify-center items-center w-full">
      <div className="flex justify-center items-center gap-4">
        <img className="w-1/6" src={box} alt="box-image" />
        <h4 className="text-hero text-xl md:text-3xl font-bold">Place your logo here</h4>
      </div>
      <div className="relative">
        <div className="absolute inset-0 bg-white opacity-80 border-radius"></div>
        <h1 className="relative font-bold text-hero text-center text-3xl md:text-7xl lg:text-8xl xl:text-9xl px-2 md:px-12 pb-4 md:pb-16 pt-3 md:pt-12">
          happy holidays!
        </h1>
      </div>
    </section>
  );
}

export default Happy;
