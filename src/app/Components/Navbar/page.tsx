
import Link from "next/link";
import React from "react";

export default function Navbar(){
    return(<div>
           <nav className="bg-emerald-400 p-4 flex justify-between items-center "> 
           <Link href='/' className=" text-pink-600 font-serif text-5xl justify-center hover:bg-pink-400 rounded-lg p-4">Pizza Paradise</Link>
            <Link href='/Menu'className=" text-pink-600 font-serif text-4xl hover:bg-pink-400 rounded-lg p-4">Menu</Link>
            <Link href='/Contact'className=" text-pink-600 font-serif text-4xl hover:bg-pink-400 rounded-lg p-4">Contact</Link>
            <Link href='/About'className="text-pink-600 font-serif text-4xl hover:bg-pink-400 rounded-lg p-4">About</Link>
            <Link href='/FAQs' className="text-pink-600 font-serif text-4xl hover:bg-pink-400 rounded-lg p-4">FAQs</Link>
            <Link href="/Order" className=" bg-sky-500 p-4  text-pink-600 rounded-lg  text-4xl font-serif hover:bg-cyan-400" >Order</Link>
            </nav>
            </div>
    )
}