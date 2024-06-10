"use client"

import Link from "next/link"
import { useState } from "react"

interface navigationLink{
  label:string
  href:string
}

const Navlinks = [
  {
    label:"About",
    href:"/about"
  },
  {
    label:"Services",
    href:"/services"
  },
  {
    label:"Products",
    href:"/products"
  },
  {
    label:"Contact",
    href:"/contact"
  }
]

export function Navbar(){
  return(
    <div className="flex flex-row justify-between items-center p-6">
      <strong className="text-5xl font-bold tracking-tighter">Tollmahawk Plus</strong>
      <div className="flex flex-row items-center gap-4 text-xl">
        {
          Navlinks.map((item:navigationLink, key:number) => (
            <Link key={key} href={item.href}>{item.label}</Link>
          ))
        }

        <Link href='/line'><button className="bg-black text-white border border-black hover:bg-white hover:text-black rounded p-2 duration-500">Free Trial</button></Link>
      </div>
    </div>
  )
}