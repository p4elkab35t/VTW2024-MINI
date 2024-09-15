import Image from "next/image";
import Link from "next/link";


export default function Nav() {
  return (
   <div className="flex flex-row items-center justify-between mb-5 w-full">
    <h1 className="text-center font-bold text-2xl"><Link href="/"><Image
              className="dark:invert"
              src="/images/Logo.png"
              alt="Event logomark"
              width={85}
              height={26}
            /></Link></h1>
    <button className="text-white gap-16 mx-3 bg-violet-700 py-[5px] px-[15px] rounded">Login</button>
  </div>
  )
}
