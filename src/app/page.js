import ListEvents from "../components/events/ListEvents";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center p-4 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <ListEvents />
      </main>
    </div>
  );
}
