import Image from "next/image";
import Nav from "./nav"
import Footer from "./footer"

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
     <Nav/>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">        
       
        {/* <div className="flex gap-4 items-center flex-col sm:flex-row">
          
          
        </div> */}
      </main>
       <Footer />   
      
    </div>
  );
}
