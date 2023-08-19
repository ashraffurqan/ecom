"use client";
import React, { useState } from 'react'
import Image, { StaticImageData } from 'next/image'

// export const SlugComponent = ({image}:string | [] | StaticImageData|any) => {
export const SlugComponent = ({ image }: { image: any }) => {
    const [path, setpath] = useState("")
    return (
        <div>
            <Image alt='ecom' src={path ? path : image[0]} height={400} width={400} />
            <div className='flex items-center justify-evenly mx-auto mt-2'>
                {image.map((items: string, i: number) => (

                    <div key={i} className='cursor-pointer w-16 h-16'>
                        <Image src={items} alt='abc' height={60} width={60} onClick={() => setpath(items)} />
                    </div>
                ))}



            </div>
        </div>
    )
}
export default SlugComponent    