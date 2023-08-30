"use client"
import React from "react";
import Image from "next/image";
import logo from '../public/logo.jpg'
import Link from "next/link";
import NavigationMenuDemo from "./navlinks";
import {GiHamburgerMenu}from 'react-icons/gi';
import { useAppSelector } from "@/app/store/hooks";
const Navbar=()=>{
  const Cart=useAppSelector((state)=>state.cart)
    return(
        <div>
          <div className="navbar bg-mywhite   ">
        <div className="navbar-start z-[100]  ">
          <div className="dropdown">
            <label tabIndex={0} className="p-0 text-2xl lg:hidden">
             <GiHamburgerMenu/>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link href={'/'}>Home</Link></li>
            <li tabIndex={0}>
              <details>
                <summary>Women</summary>
                <ul className="p-2">
                  <li><Link href={'/tops'}>Tops </Link></li>
                  <li><Link href={'/paints'}>Paints</Link></li>
                  <li><Link href={'/accesories'}>Accesories/Jewllery</Link></li>
                  <li><Link href={'/shoes'}>Shoes</Link></li>
                </ul>
              </details>
            </li>
            <li><Link href={'/about'}>About</Link></li>
            <li><Link href={'/contact'}>Contact</Link></li>
            </ul>
          </div>
          <Image src={require('../public/logo.jpg')} alt ='L'  className="hidden lg:block pl-4 "  width={100} height={300}  />  
        </div>
        <div className="navbar-center  ">
        <Image src={require('../public/logo.jpg')} alt ='L'  className="block lg:hidden h-[40px] w-[60px]"  width={100} height={300}  />
         <div className=" hidden lg:flex ">

            <NavigationMenuDemo  />
         </div>
        </div>
        <div className="navbar-end">
      <Link href={"/cart"} >
      <label tabIndex={0} className="pr-4 cursor-pointer ">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7  hover:text-orange-600 duration-300 " 
          fill="none" viewBox="0 0 24 24" 
          stroke="currentColor"><path strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2"
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          {Cart.length>0 && 
          <span className="badge badge-sm indicator-item font-semibold   group-hover:text-myblack duration-300 text-myblack">
            {Cart.length}</span>
          }
          
        </div>
      </label>
      </Link>
      </div>
        </div>
      </div>
    )
}
export default Navbar