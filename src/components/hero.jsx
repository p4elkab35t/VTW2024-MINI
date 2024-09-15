import Image from 'next/image';

export default function Hero() {
  return (
    <>
      <section className="relative h-screen md:h-[600px] mx-2">
        <div className="overflow-hidden">
        <Image
          src="/images/hero.png"
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0"
        />
        </div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center bg-black bg-opacity-50">
          <h1 className="text-5xl font-bold text-white mb-4">BY THE COMMUNITY</h1>
          <h1 className="text-5xl font-bold text-white mb-4">FOR THE COMMUNITY</h1>
          <a
            href="#events"
            className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg hover:bg-blue-700"
          >
            View Events
          </a>
        </div>
      </section>

      {/* New Section */}
      <section className="bg-black text-white py-6 px-9 mx-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-8">
            {/* Dropdown 1 */}
            <div className="flex flex-col w-full md:w-1/3">
              <label htmlFor="dropdown1" className="mb-2 text-lg font-semibold">Looking for</label>
              <select
                id="dropdown1"
                className="bg-white text-black py-2 px-4 rounded-lg focus:outline-none"
              >
                <option>Choose event type</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
            </div>

            {/* Dropdown 2 */}
            <div className="flex flex-col w-full md:w-1/3">
              <label htmlFor="dropdown2" className="mb-2 text-lg font-semibold">When</label>
              <select
                id="dropdown2"
                className="bg-white text-black py-2 px-4 rounded-lg focus:outline-none"
              >
                <option>Choose date and time</option>
                <option>Tomorrow</option>
                <option>This Week</option>
                <option>This Month</option>
              </select>
            </div>

            {/* Search Button */}
            <div className="w-full md:w-1/3 flex justify-center">
              <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-violet-950 text-white py-12 w-full mt-40">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <Image
            src="/images/object.png" // Replace with your actual image path
            alt="Section Image"
            width={500} 
            height={500}
            className="rounded-lg shadow-lg px-8"
          />
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left px-6">
          <h2 className="text-4xl font-bold mb-4">Buddy Up with VIBE for Meaningful Connections</h2>
          <p className="text-lg mb-6">
          A buddy is a fellow attendee from the tech industry who will be paired with you for an event you signed up for, providing an opportunity to learn together and connect with each other throughout the experience.
          </p>
          <a
            href="#learn-more"
            className="bg-violet-700 text-white py-2 px-6 rounded-lg text-lg hover:bg-blue-700"
          >
            Join with a Buddy Now
          </a>
        </div>
      </div>
    </section>
    </>
  );
}
