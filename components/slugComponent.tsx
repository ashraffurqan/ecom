"use client";
import React, { useState } from 'react'
import Image from 'next/image'

 export const SlugComponent = () => {
    const [path, setpath] = useState("")
    return (
        <div>
            <Image alt='ecom' src= { path ? path:"/top.jpg"} height={400} width={400} />
            <div className='flex items-center justify-evenly mx-auto mt-2'>
                <div className='cursor-pointer w-16 h-16'>
                    <Image src={"/top.jpg"} alt='abc' height={60} width={60} onClick={()=>setpath("/top.jpg")} />
                </div>
                <div className='cursor-pointer w-16 h-16'>
                    <Image src={"/top.jpg"} alt='abc' height={60} width={60} onClick={()=>setpath("/top.jpg")} />
                </div>
                <div className='cursor-pointer w-16 h-16'>
                    <Image src={"/top.jpg"} alt='abc' height={60} width={60} onClick={()=>setpath("/top.jpg")} />
                </div>
             

            </div>
        </div>
    )
}
export default SlugComponent    