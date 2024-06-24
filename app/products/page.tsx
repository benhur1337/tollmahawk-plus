import Link from "next/link"

export default function Page(){
  return(
    <div className="flex flex-col gap-6 max-w-[1100px] mx-auto">
      <div className="text-7xl font-bold tracking-tighter p-6">Our Products</div>
      <div className="flex flex-row gap-6 px-6">
        {
          [1,2,3].map((item:any, key:number) => (
            <div key={key} className="flex flex-col gap-6">
              <div className="bg-black w-[350px] h-[450px] rounded"></div>
              <div className="font-bold text-5xl">Product {item}</div>
              <p>1200 THB</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, ea a sit rerum illum at.</p>
              <Link href='/'><button className="bg-black text-white border border-black p-2 rounded font-semibold hover:bg-white hover:text-black duration-500">Buy Now</button></Link>
            </div>
          ))
        }
      </div>
    </div>
  )
}