
import React from 'react'
import CartCard from '../../../components/cartCard'

const Cart = () => {
    return (
        <div className='mt-[50px] mb-[100px] '>
            <div className='grid lg:grid-cols-3 grid-cols-1'>
                {/* item */}
                <div className='col-span-2'>
                    <CartCard src="/top.jpg" title="Ladies top" size="xl" price= {1000} />
                </div>

                {/* summary */}
                <div className='bg-myblack/5  p-5 rounded-lg '>
                    {/* headding */}
                    <h2 className='scroll-m-20 text-lg font-semibold tracking-tight uppercase'>order summary</h2>
                    {/* divider */}
                    <div className="divider mt-0  mb-1"></div>

                    {/* pricing */}
                    <div className='text-sm font-medium tracking-tight text-myblack'>
                        {/* product pricing */}
                        <div className='flex items-center justify-between capitalize'>
                            <h2>sub total</h2>
                            <h2> $1500</h2>
                        </div>
                        {/* delivery charges */}
                        <div className='flex items-center justify-between capitalize'>
                            <h2>delivery charges</h2>
                            <h2> TBD</h2>
                        </div>
                        {/* service charges */}
                        <div className='flex items-center justify-between capitalize'>
                            <h2>sales tax</h2>
                            <h2> TBD</h2>
                        </div>
                        {/* divider */}
                        <div className="divider mt-0  mb-1"></div>
                        {/* estiamted total */}
                        <div className='flex items-center justify-between uppercase font-semibold 
                        text-sm tracking-tight text-myblack'>
                            <h2>estimated total</h2>
                            <h2> $1500</h2>
                        </div>
                        {/* divider */}
                        <div className="divider mt-0  mb-1"></div>

                        {/* check out */}
                        <div className='flex items-center justify-center w-full bg-myPink hover:bg-transparent duration-300
text-mywhite hover:text-myblack scroll-m-20 text-2xl font-semibold tracking-tight
hover:shadow-md uppercase'>
                            <button className='uppercase'>proceed to check out</button>
                        </div>
                        {/* divider */}
                        <div className="divider mt-0  mb-1"></div>
                        {/* note */}
                        <p className='text-xs font-semibold tracking-tight text-myblack w[97%] text-center italic capitalize'>{`*Delivery charges 
    and the tax will be calculated in the check out page`}</p>




                    </div>
                    <div> </div>
                </div>
            </div>

        </div>
    )
}

export default Cart