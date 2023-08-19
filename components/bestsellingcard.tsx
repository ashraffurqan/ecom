
import React from 'react'
import Image from 'next/image'

import { Button } from './ui/button'
import { FaHeart, FaShoppingCart} from "react-icons/fa"
import Link from 'next/link'

export const Bestsellingcard = ({src,alt,title,discription, price, category , slug,discount}:{
    src:string ,alt:string ,title:string,discription:string, price:number , category:string , slug:string 
    ,discount:number
}) => {
  return (
    <div>

<div className="max-w-[350px] h-[35rem] p-4 mx-auto shadow-md rounded-xl relative group ">
  <Link href={`/${category}/${slug}`}>
  {/* image div */}
  <div className='block  h-[23rem] rounded overflow-hidden object-cover'>
    <Image src={src} alt='load' height={500} width={500} className='h-[300px] w-[500px]' />
    </div>
    {/* typegraphy and title div */}
  <div  >
     <h2 className="scroll-m-20 border-b pb-2 text-lg text-myblack font-semibold tracking-tight transition-colors first:mt-0 line-clamp-1">
      {title}
    </h2>
   
    <p className="mt-2 scroll-m-20 border-b pb-2 text-sm font-semibold text-myPink tracking-tight transition-colors first:mt-0 line-clamp-1">
{discription}
    </p>
<div className='flex gap-4'>

  <p className={`mt-2 scroll-m-20 border-b pb-2 text-base 
  font-semibold text-myblack tracking-tight transition-colors first:mt-0 line-clamp-1
   ${discount >0 && "line-through decoration-2 decoration-orange-500/70"}`}>
     ${price}
      </p>
      {/* discounted */}
      {discount>0 && 
    <p className=" scroll-m-20 border-b  text-base 
    font-semibold text-myblack tracking-tight transition-colors first:mt-0 line-clamp-1">
     ${price - (price*discount)/100}
      </p>}
      </div>

  </div>
  </Link>
{/* button div */}
  <div className='mr-1 ml-1'>
    <Button className='
     group bg-myblack  hover:bg-transparent
     text-mywhite hover:text-myblack
     mt-2 scroll-m-20  text-base font-semibold rounded-xl absolute bottom-2 right-2 tracking-tight transition-colors  '>
         <FaShoppingCart className='mr-2 h-4 w-4 group-hover:text-orange-500 duration-300' />  Add to Cart</Button>
         <span>&nbsp; 
        </span> <span>&nbsp; 
        </span>
         <Button className='
     group bg-myblack  hover:bg-transparent
     text-mywhite hover:text-myblack
     mt-2 scroll-m-20  text-base font-semibold rounded-xl absolute bottom-2 left-2 tracking-tight transition-colors  '>
         <FaHeart className='mr-2 h-4 w-4 group-hover:text-orange-500 duration-300' />  Buy Now</Button>

         {discount>0 && (
          <div className="scroll-m-20 text-xs font-semibold tracking-tight text-mywhite bg-orange-500 absolute
          top-0 left-2 w-[87px] p-2 text-center uppercase rounded-tl-xl rounded-bl-xl myDiscount"
          >{`${discount}%off`}</div>
         )}
  </div>

</div>

    </div>
  )
}
export default Bestsellingcard