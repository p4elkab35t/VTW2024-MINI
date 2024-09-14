import ListEvents from "../components/events/ListEvents";
import Hero from "../components/hero";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="grid items-center justify-items-center p-4 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <ListEvents />
        </main>
      </div>
    </>
  );
}
