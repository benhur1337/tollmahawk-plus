export default function Page(){
  return(
    <div>
      <div className="flex flex-row">
        <div>Welcome to Tollmahawk Plus</div>
        <div>
          <p>Embark on a journey towards excellence with Tollmahawk Plus. Whether you are a budding athlete or a seasoned sports enthusiast, our science-based sports performance consultation services will elevate your game to new heights. Let Tollmahawk guide you towards achieving your full potential and dominating the field.</p>
          <p>Join the exclusive league of winners who harness the power of Tollmahawk's expertise. Embrace success, embrace Tollmahawk Plus.</p>
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