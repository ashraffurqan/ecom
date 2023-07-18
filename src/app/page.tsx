
import Bestselling from '../../components/bestselling'
import Categories from '../../components/categories'
import FeaturedProduct from '../../components/featuredProduct'
import Hero from '../../components/hero'
import Pormotion from '../../components/pormotion'
import Services from '../../components/services'

export default function Home() {
  return (
    <div>
       <Hero />
       <FeaturedProduct/>
    <Services />
    <Pormotion /> 
     <Categories />
    <Bestselling />
    </div>
  )
}
