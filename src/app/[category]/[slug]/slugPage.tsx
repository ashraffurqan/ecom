"use client"
import { Button } from '../../../../components/ui/button'
import { FaHeart, FaShoppingCart, FaPlus, FaMinus } from 'react-icons/fa'
import { SlugComponent } from '../../../../components/slugComponent'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { useState } from 'react'
import { addToCard } from '@/app/store/features/cart'

const SlugPage = ({ params }: { params: { slug: string } }) => {
  const product = useAppSelector((state) => state.products);


  const slug = product.filter((val) => val.slug == params.slug);
  const dispatch=useAppDispatch()
  const [cartItem, setCartItem] = useState({
    id: slug[0].id,
    title: slug[0].title,
    image: slug[0].image,
    slug:slug[0].slug,
    price: slug[0].price,
    discount: slug[0].discount,
    category: slug[0].category,
    color:slug[0].color[0],
    size: slug[0].size,

    qty: slug[0].qty,
    
  })

  return (
    <div><div className="container px-5 py-24 mx-auto">
      <div className="lg:w-4/5 mx-auto flex flex-wrap">
        <SlugComponent image={slug[0].image} />


        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h2 className="text-sm title-font text-gray-500 tracking-widest uppercase">
            {slug[0].category}
          </h2>

          {/* titile */}
          <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-1 text-myblack">
            {slug[0].title}
          </h1>
          {/* rating */}

          <div className="rating rating-sm">
            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
          </div>


          {/* description */}
          <p className="leading-relaxed scroll-m-20 text-base font-normal text-myPink">
            {slug[0].description}
          </p>
          <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
            <div className="flex">
              {/* colours */}
              <span className="mr-3">Color</span>
              {slug[0].color.map((items, i) => (
                <button onClick={()=>setCartItem({...cartItem,color:items})} key={i} className="border-2 border-gray-300 mr-1 rounded-full w-6 h-6 focus:outline-none
          active:border-black focus:border-black"
                  style={{ backgroundColor: items }} />))}



            </div>

            {/* size */}
            <div className="flex ml-2 mr-2 items-center">
              <span className="scroll-m-20 border-b pb-2 text-base font-semibold tracking-tight
             transition-colors first:mt-0 mr-4 ml-2 "> Size  </span>
              <div className="relative">
                <select onClick={(e)=>setCartItem({...cartItem,size:e.target.value})} className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                  {slug[0].size.map((items, i) => (

                    <option key={i}>{items}</option>
                  ))}

                </select>
                <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          {/* quantity */}
          <div className='flex items-center '>
            <span className="mr-4 scroll-m-20 border-b pb-2 text-base font-semibold tracking-tight transition-colors first:mt-0">Quantity</span>
            <Button onClick={()=>(setCartItem({...cartItem,qty:cartItem.qty<=1?
            1:--cartItem.qty }))} className='
 group bg-myblack  hover:bg-transparent
 text-mywhite hover:text-myblack
 mt-2 scroll-m-20  text-base font-semibold rounded-xl tracking-tight transition-colors h-fit w-fit  '>
              <FaMinus className='mr-2 h-4 w-4 group-hover:text-orange-500 duration-300' />  Less</Button>
            <div className='mr-2 ml-2 scroll-m-20 text-base font-semibold tracking-tight'>{cartItem.qty}

            </div>

            <Button onClick={()=>setCartItem({...cartItem,qty:++cartItem.qty})} className='
 group bg-myblack  hover:bg-transparent
 text-mywhite hover:text-myblack
 mt-2 scroll-m-20  text-base font-semibold rounded-xl tracking-tight transition-colors h-fit w-fit '>
              <FaPlus className='mr-2 h-4 w-4 group-hover:text-orange-500 duration-300' />  Add</Button>
          </div>
          <div>

            <div className='divider'></div>
            <div className="flex items-center justify-between">

              <div>

                <span className={`title-font font-medium text-2xl text-gray-900
          ${cartItem.discount > 0 && "line-through decoration-2 decoration-orange-500/70"}
          `}>
                  ${cartItem.price  * cartItem.qty}
                </span>

                {/* discounted */}
                {cartItem.discount > 0 && (
                  <span className=" ml-5 title-font font-medium text-2xl text-gray-900">
                    ${(cartItem.price - (cartItem.price * cartItem.discount)/ 100  )* cartItem.qty}
                  </span>)}
              </div>

              {/* add to cart */}
              <Button onClick={() => dispatch(addToCard(cartItem))} className='
 group bg-myblack  hover:bg-transparent
 text-mywhite hover:text-myblack
 mt-2 scroll-m-20  text-base font-semibold rounded-xl tracking-tight transition-colors  '>
                <FaShoppingCart className='mr-2 h-4 w-4 group-hover:text-orange-500 duration-300' />  Add to Cart</Button>
            </div>
          </div>
          <Button className='w-full
 group bg-myblack  hover:bg-transparent 
 text-mywhite hover:text-myblack
 mt-2 scroll-m-20  text-base font-semibold rounded-xl tracking-tight transition-colors  '>
            <FaHeart className='mr-2 h-4 w-4 group-hover:text-orange-500 duration-300' />  Buy Now</Button>

        </div>
      </div>
    </div></div>
  )
}

export default SlugPage