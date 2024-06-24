export default function Page() {
  return (
    <div>
      <div className="flex flex-row max-w-[1100px] mx-auto gap-6 p-6">
        <div className="flex flex-col w-1/2 gap-6 p-4">
          <div className="text-7xl font-bold break-words tracking-tighter">
            Meet Tollmahawk Plus.
          </div>
          <p>
            Discover the exceptional journey of Tollmahawk Plus, led by the
            renowned athlete himself. Experience a blend of cutting-edge science
            and athletic expertise, setting new benchmarks in sports performance
            consultation. Embrace the essence of Tollmahawk, where excellence
            meets innovation.
          </p>
          <p>
            Elevate your game with Tollmahawk Plus and redefine your athletic
            potential. Unleash your true capabilities with a touch of
            unparalleled excellence.
          </p>
        </div>
        <div className="h-[800px] w-1/2 bg-black rounded-lg"></div>
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
  );
}
