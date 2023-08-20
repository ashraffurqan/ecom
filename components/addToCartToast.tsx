"use client"
import React from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from './ui/button';
import { FaShoppingCart } from 'react-icons/fa';
import { useAppDispatch } from '@/app/store/hooks';
import { addToCard } from '@/app/store/features/cart';
import CartCard from './cartCard';
const AddToCartToast = ({cartItem}:any) => {
    const dispatch=useAppDispatch()
    const notify = () =>   toast.success ('Product Edit Sucessfully', {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
  
  return (
    <div className='w-fit' onClick={() => dispatch(addToCard(cartItem))}> 
        {/* <button onClick={notify}>Notify!</button> */}
        <Button onClick={notify}  className='
 group bg-myblack  hover:bg-transparent
 text-mywhite hover:text-myblack
 mt-2 scroll-m-20  text-base font-semibold rounded-xl tracking-tight transition-colors  '>
                <FaShoppingCart className='mr-2 h-4 w-4 group-hover:text-orange-500 duration-300' />  Add to Cart</Button>
    <ToastContainer
    position="top-left"
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
    />
    </div>
  )
}

export default AddToCartToast