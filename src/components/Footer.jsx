import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Ensure you have FontAwesome installed
import "../index.css";

function Footer() {
  return (
    <div className='w-full'>
      <div className='bg-red-700 text-white text-center p-6'>
        <p className='mb-4'>follow us on social media</p>
        <div className='flex justify-center space-x-4 mb-4'>
          <a href='#' className='bg-white text-red-700 rounded-full  flex items-center justify-center p-2' style={{ height: "28px" }}>
            <i className='fab fa-facebook-f'></i>
          </a>
          <a href='#' className='bg-white text-red-700 rounded-full flex items-center justify-center p-2' style={{ height: "28px" }}>
            <i className='fab fa-twitter'></i>
          </a>
          <a href='#' className='bg-white text-red-700 rounded-full flex items-center justify-center p-2' style={{ height: "28px" }}>
            <i className='fab fa-pinterest-p'></i>
          </a>
          <a href='#' className='bg-white text-red-700 rounded-full flex items-center justify-center p-2' style={{ height: "28px" }}>
            <i className='fab fa-instagram'></i>
          </a>
        </div>
        </div>
        <div className='bg-white text-black text-center p-6'>
        <p className='mb-2 text-black'>Copyright 2024 YourSite. All right reserved.</p>
        <p className='mb-2 text-black'>
          You subscribed to our newsletter via our website, example.com
        </p>
        <p>
          <a href='#' className='underline text-black'>
            Unsubscribe from this list.
          </a>
        </p>
         
      </div>
    </div>
  );
}

export default Footer;
