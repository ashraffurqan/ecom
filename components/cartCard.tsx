import Image from 'next/image'
import React from 'react'
import {FaPlus,FaMinus, FaTrash}from 'react-icons/fa'

const CartCard = ({ src, title, size, price }: { src: string, title: string, size: string, price: number }) => {
    return (
        <div className='flex p-10'>
            {/* Image */}
            <Image src={src} alt={title} height={200} width={200} className='w-[120px] h-[2 00px]' />

            {/* soeminfo */}
            <div className='flex px-5 justify-between items-center w-full'>
                {/* title */}
                <div>            <h2 className='text-sm font-xsemibold leading-none line-clamp-1 text-myblack'>
                    {title}
                </h2>
                    {/* size */}
                    <p className='mt-2 text-sm text-myblack/80 leading-none line-clamp-1'>
                        {/* &nbsp; mean space */}
                        size:&nbsp;<span>{size}</span></p>
                    {/* quatity */}
                    <div className='flex mt-2 items-center '>
                        <button className='group hover:bg-mywhite  bg-myblack text-mywhite
                        hover:text-myblack w-6 h-6 rounded-lg text-xs duration-300'>
                            <FaMinus className='h-4 w-4 mx-auto group hover:text-myblack'/> </button>
                            <div className='mr-2 ml-2 scroll-m-20 text-sm font-semibold tracking-tight'>1</div>
                            <button className='group hover:bg-mywhite  bg-myblack text-mywhite
                        hover:text-myblack w-6 h-6 rounded-lg text-xs duration-300'>
                            <FaPlus className='h-4 w-4 mx-auto group hover:text-myblack'/> </button>
                    </div>
                    <div className=' mt-6 flex-col  gap-5'>
    <h3 className='text-sm font-semibold  leading-none text-myblack '><span>Price:&nbsp; 
        </span> &#36;{price}</h3> <br></br>
        <FaTrash className=' ml-6 text-base font-semibold leading-none line-clamp-1 text-red-500 cursor-pointer'/>
</div>

                </div>



            </div>
{/* price and delete */}
{/* <div className='hidden lg:flex  flex-col items-end gap-5'>
    <h3 className='text-sm font-semibold  leading-none text-myblack '><span>Price:&nbsp; 
        </span>&#36;{price}</h3>
        <FaTrash className=' text-base font-semibold leading-none line-clamp-1 text-red-500 cursor-pointer'/>
</div> */}

        </div>
    )
}

export default CartCard