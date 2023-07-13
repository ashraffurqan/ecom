import React from 'react'
import Bestsellingcard from '../../../components/bestsellingcard'

const Category = () => {
  const bestsell=[
    {
    src:"/jeans.jpg",
    alt:"Cotton Jeans",
    title:"Male Jeans",
    discription:"Best quality Jeans",
    price:150 },
    {
        src:"/neck.jpg",
        alt:"Ladies Jewellery",
        title:"Neckless",
        discription:"Best quality jewllery",
        price:150 },
        {
            src:"/top.jpg",
            alt:"Ladies Cotton Top",
            title:"Tops",
            discription:"Best quality cotton tops",
            price:150 },
    {
    src:"/jeans.jpg",
    alt:"Cotton Jeans",
    title:"Male Jeans",
    discription:"Best quality Jeans",
    price:150 },
    {
        src:"/neck.jpg",
        alt:"Ladies Jewellery",
        title:"Neckless",
        discription:"Best quality jewllery",
        price:150 },
        {
            src:"/top.jpg",
            alt:"Ladies Cotton Top",
            title:"Tops",
            discription:"Best quality cotton tops",
            price:150 },
    {
    src:"/jeans.jpg",
    alt:"Cotton Jeans",
    title:"Male Jeans",
    discription:"Best quality Jeans",
    price:150 },
    {
        src:"/neck.jpg",
        alt:"Ladies Jewellery",
        title:"Neckless",
        discription:"Best quality jewllery",
        price:150 },
        {
            src:"/top.jpg",
            alt:"Ladies Cotton Top",
            title:"Tops",
            discription:"Best quality cotton tops",
            price:150 },
    {
    src:"/jeans.jpg",
    alt:"Cotton Jeans",
    title:"Male Jeans",
    discription:"Best quality Jeans",
    price:150 },
    {
        src:"/neck.jpg",
        alt:"Ladies Jewellery",
        title:"Neckless",
        discription:"Best quality jewllery",
        price:150 },
        {
            src:"/top.jpg",
            alt:"Ladies Cotton Top",
            title:"Tops",
            discription:"Best quality cotton tops",
            price:150 },

]
  return (
    <div className= "mt-[50px]  mb-[100px] ">
{/* Heading */}
<div className="text-center mb-10">
    <h1 className="scroll-m-20 text-xl  tracking-tight lg:text-2xl capitalize">
    Tops
    </h1>
  
    <div className="flex mt-2 justify-center">
      <div className="w-16 h-1 rounded-full bg-orange-500 inline-flex" />
    </div>
  </div>

{/*category start here */}
<div className='flex  flex-wrap justify-center gap-5 '>
{
    bestsell.map((items,i)=>(
        <Bestsellingcard
        key={i}
        src={items.src} alt={items.alt} title={items.title} discription={items.discription}  price={items.price} />
    ))
}
</div>


    </div>
  )
}
export default Category
