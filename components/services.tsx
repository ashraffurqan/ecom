import Image from "next/image";
import React from "react";

const Services =()=>{
    return( <section className="body-font mt-[100px] mb-[100px]">
    <div className="container px-5 mx-auto">
      <div className="text-center mb-10">
        <h1 className="scroll-m-20 text-xl  tracking-tight lg:text-2xl">
          Our Services 
        </h1>
      
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-orange-500 inline-flex" />
        </div>
      </div>
      <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">

        {/* delevery section */}
        <div className="group-hover:text-orange-500 duration-300 p-4 mx-auto lg:w-1/3 flex flex-col text-center items-center">
          <div className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0">
        <Image  src={require("../public/ven.jpg")} alt="Delivery"width={1000}height={1000} className="w-20 h-20"/>
          </div>
          <div className="flex-grow">
            <h2 className="scroll-m-20 text-lg text-myPink font-bold tracking-tight lg:text-xl capitalize mb-3">
              Free Delivery
            </h2>
            <p className=" line-clamp-2 capitalize scroll-m-20  text-base font-semibold tracking-tight transition-colors text-myPink ">
              Free Delivery on above order 1500/= 
            </p>
           
             
          
            
          </div>
        </div>
        {/* 24/7 */}
        <div className="group-hover:text-orange-500 duration-300 p-4 mx-auto lg:w-1/3 flex flex-col text-center items-center">
          <div className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0">
        <Image  src={require("../public/call.jpg")} alt="Delivery"width={1000}height={1000} className="w-20 h-20"/>
          </div>
          <div className="flex-grow">
            <h2 className="scroll-m-20 text-lg text-myPink font-bold tracking-tight lg:text-xl capitalize mb-3">
              24/7 customer services
            </h2>
            <p className=" line-clamp-2 capitalize scroll-m-20  text-base font-semibold tracking-tight transition-colors text-myPink ">
              For Queris and Questions  Feel Free  to Contact
            </p>
           
             
          
            
          </div>
        </div>
        {/* money Back*/}
        <div className="group-hover:text-orange-500 duration-300 p-4 mx-auto lg:w-1/3 flex flex-col text-center items-center">
          <div className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0">
        <Image  src={require("../public/money.jpg")} alt="Delivery"width={1000}height={1000} className="w-20 h-20"/>
          </div>
          <div className="flex-grow">
            <h2 className="scroll-m-20 text-lg text-myPink font-bold tracking-tight lg:text-xl capitalize mb-3">
              Money Back Garantee
            </h2>
            <p className=" line-clamp-2 capitalize scroll-m-20  text-base font-semibold tracking-tight transition-colors text-myPink ">
              Get Money Back Garantee on Damage Product  
            </p>
           
             
          
            
          </div>
        </div>
      </div>
      
    </div>
  </section>
  )
}
export default Services