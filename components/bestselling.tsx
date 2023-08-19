"use client"
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { FaHeart, FaShoppingCart} from "react-icons/fa"
import Bestsellingcard from './bestsellingcard'
import jeans from '../public/jeans.jpg'
import { useAppSelector } from '@/app/store/hooks'

export const Bestselling = () => {
  const product =useAppSelector ((state)=>state.products);
  const bestsell=product.slice(0,3)
    // const bestsell=[
    //   {
    //     src:"/jeans.jpg",
    //     alt:"Cotton Jeans",
    //     title:"Male Jeans",
    //     discription:"Best quality Jeans",
    //     price:150,
    //     category:"jeans",
    //     slug:"Cotton Jeans" 
      
    //   },
    //     {
    //         src:"/neck.jpg",
    //         alt:"Ladies Jewellery",
    //         title:"Neckless",
    //         discription:"Best quality jewllery",
    //         price:150,
    //         category:"accesories",
    //         slug:"neckless"  },
    //         {
    //             src:"/top.jpg",
    //             alt:"Ladies Cotton Top",
    //             title:"Tops",
    //             discription:"Best quality cotton tops",
    //             price:150 ,
    //             category:"tops",
    //             slug:"upper tops" },

    // ]
  return (
    <div  className=' mt-[100px] mb-[100px]'> 

  {/* Heading */}
  <div className="text-center mb-10">
    <h1 className="scroll-m-20 text-xl  tracking-tight lg:text-2xl">
     Best Selling Products
    </h1>
  
    <div className="flex mt-2 justify-center">
      <div className="w-16 h-1 rounded-full bg-orange-500 inline-flex" />
    </div>
  </div>
{/* Best Selling 1srt product */}
<div className='flex  flex-wrap justify-center gap-5 '>
{
    bestsell.map((items:any,i)=>(
        <Bestsellingcard key={i} src={items.image[0]} alt={items.title} title={items.title} discription={items.discription}  price={items.price} 
        category={items.category}
        slug={items.slug}
        discount={items.discount}
        />
    ))
}
</div>
{/* <Bestsellingcard /> */}

  </div>
        
    
  )
}
export default Bestselling