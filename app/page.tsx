import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>
        <div className="flex flex-col gap-4 justify-center items-center bg-black h-[500px]">
          <div className="text-white bg-transparent text-5xl"> Discover the epitome of athletic excellence.</div>
          <div className="flex flex-row justify-evenly gap-4 items-center bg-transparent text-xl">
            <button className="rounded border border-white text-white hover:bg-white hover:text-black duration-500 p-2">Read More</button>
            <button className="rounded border border-white text-black bg-white hover:scale-110 hover:font-semibold duration-500 p-2">Free Trial</button>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-evenly items-center gap-6 max-w-[1100px] h-[500px] mx-auto">
        <div className="flex flex-col items-start justify-center gap-4 w-1/2 p-6">
          <strong className="text-6xl tracking-tighter">Welcome to Tollmahawk Plus.</strong>
          <p>Experience the professionalism and dedication of our team to elevate your sports performance to the next level.</p>
          <Link className="text-xl hover:scale-105 duration-500" href='/'> → <span className="underline underline-offset-4">Get started</span></Link>
        </div>
        <div className="flex flex-col gap-4 w-1/2 border border-white border-l-black p-6">
          <div>
            <strong>Free Consultation</strong>
            <p>Book a free consultation now so we can start planning.</p>
          </div>
          <div>
            <strong>1-on-1 Coaching</strong>
            <p>Book a 1-on-1 Coaching now so we can start planning.</p>
          </div>
          <div>
            <strong>Sports Performance Test</strong>
            <p>Book a Sports Performance Test now so we can start planning.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
