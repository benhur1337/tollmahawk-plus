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
    <div className="flex flex-row justify-between items-center p-6 fixed top-0 left-0 w-full z-50">
      <strong className="text-3xl font-bold tracking-tighter">Tollmahawk Plus</strong>
      <div className="flex flex-row items-center gap-4">
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
export function NavbarInvis(){
  return(
    <div className="flex flex-row justify-between items-center p-6 pointer-events-none">
      <strong className="text-3xl font-bold tracking-tighter">Tollmahawk Plus</strong>
      <div className="flex flex-row items-center gap-4">
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

export function Footer(){
  return(
    <div className="py-[150px] max-w-[1100px] mx-auto">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col gap-4">
          <div className="text-5xl font-bold tracking-tighter">Tollmahawk Plus</div>
          <div>Unleash performance within.</div>
        </div>

        <div className="flex flex-row justify-evenly gap-9 w-1/2">
          <div className="flex flex-col gap-4">
            <div className="text-2xl font-bold tracking-tighter">Navigation</div>
            {
              Navlinks.map((item:navigationLink, key:number) => (
                <Link key={key} href={item.href}>{item.label}</Link>
              ))
            }
          </div>
          <div>
            <div className="text-2xl font-bold tracking-tighter">Location</div>
            <div>Lorem ipsum dolor sit amet.</div>
            <div>Lorem ipsum dolor sit amet.</div>
            <div>Lorem ipsum dolor sit amet.</div>
          </div>
          <div>
            <div className="text-2xl font-bold tracking-tighter">Contact</div>
            <div className="flex flex-row gap-4">
              <div className="h-[1.5rem] w-[1.5rem] bg-black rounded"></div>
              <div className="h-[1.5rem] w-[1.5rem] bg-black rounded"></div>
              <div className="h-[1.5rem] w-[1.5rem] bg-black rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}