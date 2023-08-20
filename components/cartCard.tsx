"use client"
import Image from 'next/image'

import { useAppSelector } from '@/app/store/hooks' 
import React from 'react'
import {FaPlus,FaMinus, FaTrash}from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { addtoCart, delItem, subCart } from '@/app/store/features/cart'

const CartCard = () => {
    const dispatch=useDispatch();
    const  cartArray=useAppSelector ((state) => state.cart);
    console.log("dfas",cartArray)
    return (
    <>
    {
    cartArray.map((item,i)=>(

    
        <div  key={i} className='flex px-10 py-3'>
    
            {/* Image */}
        <Image src={item.image[0]} alt={item.title} height={80} width={80} className='sm:w-[100px] 
             lg:w-[110px] h-[100px] ' />
        
            {/* soeminfo */}
            <div className='flex px-5 justify-between items-center w-full'>
                {/* title */}
                <div>            <h2 className='text-lg font-xsemibold leading-none line-clamp-1 text-myblack'>
                    {item.title}
                   
                </h2>
                 
                    {/* size */}
                    <p className='mt-2 text-lg text-myblack/80 leading-none line-clamp-1'>
                        {/* &nbsp; mean space */}
                        
                        size:&nbsp;<span>{item.size}</span></p>
                        
                    {/* quatity */}
                    <div className='flex mt-2 items-center '>
                        <button onClick={()=>(dispatch(subCart(item)))} className='group hover:bg-mywhite  bg-myblack text-mywhite
                        hover:text-myblack w-6 h-6 rounded-lg text-xs duration-300'>
                              <FaMinus className='h-4 w-4 mx-auto group hover:text-myblack'/> </button>
                            <div className='mr-2 ml-2 scroll-m-20 text-sm font-semibold tracking-tight'>{item.qty}</div>
                            <button onClick={()=>(dispatch(addtoCart(item)))} className='group hover:bg-mywhite  bg-myblack text-mywhite
                        hover:text-myblack w-6 h-6 rounded-lg text-xs duration-300'>
                               <FaPlus className='h-4 w-4 mx-auto group hover:text-myblack'/> </button>
                    </div>
                    <div className=' mt-1 flex-col  gap-5'>
                    <h3 className='text-sm font-semibold  leading-none text-myblack '><span>Price:&nbsp;  
        
        </span> &#36;{item.discount>0 ? (item.price-((item.price*item.discount)/100)) 
        *item.qty: item.price*item.qty}</h3> 
         <FaTrash onClick={()=>dispatch(delItem(item.uuid))} className='mt-2 ml-6 text-base font-semibold leading-none line-clamp-1 text-red-500 cursor-pointer'/>
</div>

                </div>



            </div>
{/* price and delete */}
{/* <div className='hidden lg:flex  flex-col items-end gap-5'>
    <h3 className='text-sm font-semibold  leading-none text-myblack '><span>Price:&nbsp; 
        </span>&#36;{item.discount>0 ? (item.price-((item.price*item.discount)/100)) 
        *item.qty: item.price*item.qty}</h3>
        <FaTrash className=' text-base font-semibold leading-none line-clamp-1 text-red-500 cursor-pointer'/>
</div> */}

        </div>
        ))}
        </>
        
    )
}

export default CartCard