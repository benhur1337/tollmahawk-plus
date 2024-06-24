import Link from "next/link"

export default function Page(){
  return(
    <div>
      <div className="flex flex-row gap-6 max-w-[1100px] mx-auto my-[150px] items-center justify-between">
        <div className="text-7xl font-bold tracking-tighter p-6 w-1/2">Welcome to Tollmahawk Plus.</div>
        <div className="flex flex-col gap-6 p-6 w-1/2">
          <p>Embark on a journey towards excellence with Tollmahawk Plus. Whether you are a budding athlete or a seasoned sports enthusiast, our science-based sports performance consultation services will elevate your game to new heights. Let Tollmahawk guide you towards achieving your full potential and dominating the field.</p>
          <p>Join the exclusive league of winners who harness the power of Tollmahawk's expertise. Embrace success, embrace Tollmahawk Plus.</p>
        </div>
      </div>

      <div className="flex flex-col my-[150px] max-w-[1100px] mx-auto gap-6">
        <div className="text-6xl font-extrabold tracking-tighter">Our Commitments</div>
        <div className="flex flex-row gap-6"> 
          {
            [1,2,3].map( (item:any, key:number) => (
              <div key={key} className="flex flex-col gap-6">
                <div className="bg-black w-[350px] h-[350px] rounded-lg"></div>
                <div className="text-3xl font-bold tracking-tighter">Service {item}</div>
                <p>7500 THB</p>
                <p>Explore the pinnacle of performance enhancement. Elevate your game with Tollmahawk's innovative strategies.</p>
                <Link href='/'><button className="border border-black rounded bg-black p-2 text-white hover:bg-white hover:text-black font-semibold duration-500">Book Now</button></Link>
              </div>
            ))
          }
        </div>
      </div>

      <div>
        <div className="flex flex-col gap-6 justify-center items-center bg-black h-[500px]">
          <div className="text-white bg-transparent text-6xl tracking-tighter"> Discover the epitome of athletic excellence.</div>
          <div className="flex flex-row justify-evenly gap-4 items-center bg-transparent text-xl">
            <button className="rounded border border-white text-white hover:bg-white hover:text-black duration-500 p-2">Read More</button>
            <button className="rounded border border-white text-black bg-white hover:scale-110 hover:font-semibold duration-500 p-2">Free Trial</button>
          </div>
        </div>
      </div>
    </div>
  )
}