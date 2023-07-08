import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Categories = () => {
  return (
    <div  className=' mt-[100px] mb-[100px]'>   
    {/* Heading */}
      <div className="text-center mb-10">
    <h1 className="scroll-m-20 text-xl  tracking-tight lg:text-2xl">
     Cattegories
    </h1>
  
    <div className="flex mt-2 justify-center">
      <div className="w-16 h-1 rounded-full bg-orange-500 inline-flex" />
    </div>
  </div>
  {/* heading end */}
  {/* categories start */}
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
  {/* categories 1 */}
<div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative '>
    <Link href={"#"}> <Image alt="Top" 
src={require("../public/top.jpg")}
 width={350}height={350} className='rounded-xl duration-500 group-hover:scale-125 h-[300px]  '  /> 
 <div className='hidden lg:block absolute -bottom-24 group-hover:bottom-0 duration-500 scroll-m-20 text-4xl font-extrabold -tracking-tight
  bg-myblack/70
 text-center text-mywhite w-full '>
    <h1 className='uppercase'>Tops</h1>
    </div>
    <div className='block lg:hidden absolute bottom-12   scroll-m-20 text-4xl font-extrabold -tracking-tight
  bg-myblack/70
 text-center text-mywhite w-full '>
    <h1 className='uppercase'>Tops</h1>
    </div>
    </Link>
     </div>
 {/* categories 2 */}
     <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative '>
    <Link href={"#"}> <Image alt="Top" 
src={require("../public/neck.jpg")}
 width={350}height={350} className='rounded-xl duration-500 group-hover:scale-125 h-[300px] '  /> 
 <div className='hidden lg:block absolute -bottom-24 group-hover:bottom-0 duration-500 scroll-m-20 text-4xl font-extrabold -tracking-tight
  bg-myblack/70
 text-center text-mywhite w-full '>
    <h1 className='uppercase'>jewwllery</h1>
    </div>
    <div className='block lg:hidden absolute bottom-12   scroll-m-20 text-4xl font-extrabold -tracking-tight
  bg-myblack/70
 text-center text-mywhite w-full '>
    <h1 className='uppercase'>jewwllery</h1>
    </div></Link>
     </div>
 {/* categories 3 */}

     <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative '>
    <Link href={"#"}> <Image alt="Top" 
src={require("../public/shoes.jpg")}
 width={350}height={350} className='rounded-xl duration-500 group-hover:scale-125 h-[300px]  '  /> 
  <div className='hidden lg:block absolute -bottom-24 group-hover:bottom-0 duration-500 scroll-m-20 text-4xl font-extrabold -tracking-tight
  bg-myblack/70
 text-center text-mywhite w-full '>
    <h1 className='uppercase'>shoes</h1>
    </div>
    <div className='block lg:hidden absolute bottom-12   scroll-m-20 text-4xl font-extrabold -tracking-tight
  bg-myblack/70
 text-center text-mywhite w-full '>
    <h1 className='uppercase'>shoes</h1>
    </div>
    </Link>
     </div>

 {/* categories 4 */}

 <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative '>
    <Link href={"#"}> <Image alt="Top" 
src={require("../public/jeans.jpg")}
 width={350}height={350} className='rounded-xl duration-500 group-hover:scale-125 h-[300px]  '  /> 
 <div className='hidden lg:block absolute -bottom-24 group-hover:bottom-0 duration-500 scroll-m-20 text-4xl font-extrabold -tracking-tight
  bg-myblack/70
 text-center text-mywhite w-full '>
    <h1 className='uppercase'>jeans</h1>
    </div>
    <div className='block lg:hidden absolute bottom-12   scroll-m-20 text-4xl font-extrabold -tracking-tight
  bg-myblack/70
 text-center text-mywhite w-full '>
    <h1 className='uppercase'>jeans</h1>
    </div></Link>
     </div>


     </div>
  </div>
  )
}
export default Categories