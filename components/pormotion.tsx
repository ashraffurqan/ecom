import React from 'react'

const Pormotion = () => {
  return (
    <div className=' mt-[100px] mb-[100px]'>
        {/* Heading */}
              <div className="text-center mb-10">
        <h1 className="scroll-m-20 text-xl  tracking-tight lg:text-2xl">
          Our Pormotion
        </h1>
      
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-orange-500 inline-flex" />
        </div>
      </div>
      {/* pormotion start */}
        {/* 1st pormotion */}
      <div className='grid grid-cols-1  lg:grid-cols-3 gap-5'>

      <div className="hero h-[25rem]  promo-1 rounded-xl mb-2" >
  <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className=" scroll-m-20 text-4xl font-bold tracking-tight">Get Flat 60%OFF</h1>
      <p className="mb-5">Ladies Accesories 60%OFF Flash Deals With Free Delivery</p>
   
    </div>
  </div>
</div>
      

{/*  pormotion */}
<div className="hero h-[25rem]  promo-2 rounded-xl mb-2" >
  <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className=" scroll-m-20 text-4xl font-bold tracking-tight">Get Flat 60%OFF</h1>
      <p className="mb-5">Winter Deals Cloths 50 to 60% OFF  With Free Delivery</p>
   
    </div>
  </div>
</div>


{/*  pormotion */}
<div className="hero h-[25rem]  promo-3 rounded-xl mb-2" >
  <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className=" scroll-m-20 text-4xl font-bold tracking-tight">Get Flat 40%OFF</h1>
      <p className="mb-5">Ladies and Gents Watch 50%OFF For Limited Time</p>
   
    </div>
  </div>
</div>


</div>
    </div>
  )
}

export default Pormotion