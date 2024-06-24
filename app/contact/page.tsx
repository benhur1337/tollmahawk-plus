import Link from "next/link";

export default function Page() {
  return (
    <div>
      <div className="flex flex-row max-w-[1100px] mx-auto gap-6 p-6">
        <div className="flex flex-col w-1/2 gap-6 px-6">
          <div className="text-7xl font-bold break-words tracking-tighter">
            Contact Us
          </div>
          <p>
            Inform individuals about the purpose of reaching out and the
            exceptional support they can anticipate upon contacting the renowned
            Tollmahawk. Be sure to select a secure submission option for your
            inquiries.
          </p>
          <p>
            Elevate your game with Tollmahawk Plus and redefine your athletic
            potential. Unleash your true capabilities with a touch of
            unparalleled excellence.
          </p>

          <div className="flex flex-col gap-4">
            <div className="text-3xl font-bold tracking-tighter">Socials</div>
            {["Facebook", "Instagram", "LINE"].map((item: any, key: number) => (
              <Link href="/">{item}</Link>
            ))}
          </div>

          <div className="h-full w-full bg-black rounded-lg">

          </div>
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
