import React from "react";
import { Button } from "./ui/button";
import {AiFillShopping} from 'react-icons/ai'
const Hero = ()=>{
    return (
      <div className="mb-[100px]">  <div className="hero min-h-[80vh] custom-img bg-fixed bg-center bg-no-repeat" >
      <div className="hero-overlay bg-opacity-30"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ">Summer Seassion</h1>
          <p className="mb-5 scroll-m-20 text-xl font-semibold tracking-tight">Shop At Asan Mart Clothing And Enjoy Timeless Designs And High Quality Fashion Wear. Delivery Within 2 - 4 Business Days. High Quality Items.</p>
          <Button className="outline outline-offset-2 outline-1 text-mywhite group hover:outline-orange-500
           duration-300">
      <AiFillShopping className="mr-2 h-6 w-6 group-hover:text-orange-500 group-hover:animate-bounce duration-700 " /> Sop Now
    </Button>
        </div>
      </div>
    </div> </div>
    )
};
export default Hero