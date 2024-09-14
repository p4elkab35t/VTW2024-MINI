export default function Footer() {
   return (
      <div className="bg-black text-white w-full mx-auto inset-x-0 pt-1">
         <h1 className="text-center font-bold text-2xl my-4">VIBE</h1>
         <footer className="flex gap-6 flex-wrap items-center justify-center w-full">
            <div className="">
               <div className="flex flex-row items-center justify-center mb-5 w-full">
                  <form method="POST">
                     <input type="text" name="email" placeholder="Enter your email" className="gap-16 p-[5px] rounded" />
                     <button type="submit" className="gap-16 mx-3 bg-purple-500 p-[5px] rounded">Subcribe</button>
                  </form>
               </div>
               <div className="flex flex-row gap-16 mx-3 items-center justify-center text-center">
                  <button>Home</button>
                  <button>About</button>
                  <button>Services</button>
                  <button>Get in touch</button>
                  <button>FAQs</button>
               </div>
               <hr className="my-5" />
               <div className="flex flex-row mb-5">
                  <div className="flex flex-row gap-30">
                     <button className="gap-30 mx-1 bg-purple-500 p-[5px] rounded">English</button>
                     <button className="gap-30 mx-1">French</button>
                     <button className="gap-30 mx-1">Hindi</button>
                  </div>
                  <div className="ml-auto">Copyrighted &copy; 2024 by VIELE</div>
               </div>
            </div>
         </footer>
      </div>


   )
}