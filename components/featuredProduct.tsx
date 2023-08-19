"use client"
import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Bestsellingcard from './bestsellingcard';
import { useAppSelector } from '@/app/store/hooks';

const FeaturedProduct = () => {
    // my data
   
   
      const bestsell =useAppSelector((state)=>state.products.slice(0,9));
    // caroudl setting

    var settings = {
        dots: true,
        arrows:false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              arrows:false,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 2,
              arrows:false,
              dots: true,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              arrows:false,
              dots: false,
              slidesToScroll: 1
              
            }
          }
        ]
      };
    return (
        <div className=' mt-[100px] mb-[100px] '>

            {/* Heading */}
            <div className="text-center mb-10">
                <h1 className="scroll-m-20 text-xl  tracking-tight lg:text-2xl capitalize  text-center">
                    Featured Product
                </h1>

                <div className="flex mt-2 justify-center">
                    <div className="w-16 h-1 rounded-full bg-orange-500 inline-flex" />
                </div>
            </div>
            {/* carousel */}
           
          <div>
            <Slider className='pb-8' {...settings}>
      
            {
    bestsell.map((items:any,i)=>(
        <Bestsellingcard key={i} src={items.image[0]} alt={items.titile} title={items.title} discription={items.discription}  price={items.price} 
        category={items.category}
        slug={items.slug}
        discount={items.discount}
        />
        
    ))
}
        </Slider>
        </div>
        </div>
        
    )
}

export default FeaturedProduct