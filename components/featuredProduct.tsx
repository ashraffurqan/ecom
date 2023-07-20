"use client"
import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Bestsellingcard from './bestsellingcard';

const FeaturedProduct = () => {
    // my data
   
    const bestsell=[
        {
          src:"/jeans.jpg",
          alt:"Cotton Jeans",
          title:"Male Jeans",
          discription:"Best quality Jeans",
          price:150,
          category:"jeans",
          slug:"Cotton Jeans" 
        
        },
          {
              src:"/neck.jpg",
              alt:"Ladies Jewellery",
              title:"Neckless",
              discription:"Best quality jewllery",
              price:150,
              category:"accesories",
              slug:"neckless"  },
              {
                  src:"/top.jpg",
                  alt:"Ladies Cotton Top",
                  title:"Tops",
                  discription:"Best quality cotton tops",
                  price:150 ,
                  category:"tops",
                  slug:"upper tops" },
  
              {
                  src:"/promo3.jpg",
                  alt:"Ladies Cotton Top",
                  title:"Tops",
                  discription:"Best quality cotton tops",
                  price:150 ,
                  category:"tops",
                  slug:"upper tops" },
  
              {
                  src:"/promo2.jpg",
                  alt:"Ladies Cotton Top",
                  title:"Tops",
                  discription:"Best quality cotton tops",
                  price:150 ,
                  category:"tops",
                  slug:"upper tops" },
              {
                  src:"/promo1.jpg",
                  alt:"Ladies Cotton Top",
                  title:"Tops",
                  discription:"Best quality cotton tops",
                  price:150 ,
                  category:"tops",
                  slug:"upper tops" },
  
      ]
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
              slidesToShow: 2,
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
    bestsell.map((items,i)=>(
        <Bestsellingcard key={i} src={items.src} alt={items.alt} title={items.title} discription={items.discription}  price={items.price} 
        category={items.category}
        slug={items.slug}
        />
        
    ))
}
        </Slider>
        </div>
        </div>
        
    )
}

export default FeaturedProduct