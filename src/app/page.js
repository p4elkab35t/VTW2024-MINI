import ListEvents from "../components/events/ListEvents";
import CustomSelect from "../components/ui/select";
import Hero from "../components/hero";

export const metadata = {
  title: 'VIBE - Buddy system for events'
}
export default function Home() {
  return (
    <div className="container mx-auto max-w-[1320px]">
    <Hero />
    <div className="grid items-center justify-items-center p-4 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="mainHeader px-4 flex justify-between w-full">
          <h1 className="text-4xl font-bold text-center">Discover <span className="text-[#6200EE]">Events</span></h1>
          <CustomSelect options={["All Events", "Upcoming Events", "Past Events"]} />
        </div>
        <ListEvents />
      </main>
    </div>
    </div>
  );
}
