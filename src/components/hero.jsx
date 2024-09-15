import Image from 'next/image';

export default function Hero() {
  return (
    <>
      <section className="relative h-screen md:h-[600px] mx-2 rounded-lg">
        <div className="overflow-hidden rounded-lg">
        <Image
          src="/images/hero.png"
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0 rounded-lg"
        />
        </div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center bg-black bg-opacity-50 rounded-lg">
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
      <section className=" bg-black z-30 relative text-white py-6 px-9 -mt-10 mx-12 rounded-lg">
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
    </>
  );
}
