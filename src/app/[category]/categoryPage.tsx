"use client"
import Bestsellingcard from '../../../components/bestsellingcard'
import { useAppSelector } from '../store/hooks'


const CategoryPage = ({params}:{params:{category:string}}) => {
    const product =useAppSelector((state)=>state.products)
  
    const bestsell=product.filter((val)=>val.category==params.category)
  return (
    <div> {/* Heading */}
    <div className="text-center mb-10">
      <h1 className="scroll-m-20 text-xl  tracking-tight lg:text-2xl capitalize">
        {params.category}
      </h1>

      <div className="flex mt-2 justify-center">
        <div className="w-16 h-1 rounded-full bg-orange-500 inline-flex" />
      </div>
    </div>

    {/*category start here */}
    <div className='flex  flex-wrap justify-center gap-5 '>
      {
        bestsell.map((items:any, i) => (
          <Bestsellingcard
            key={i}
            src={items.image[0]} alt={items.title} title={items.title} discription={items.description} price={items.price} 
            category={items.category} slug={items.slug} discount={items.discount}
            />
        ))
      }
    </div></div>
  )
}

export default CategoryPage