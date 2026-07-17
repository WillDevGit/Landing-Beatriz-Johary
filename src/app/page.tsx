import { Hero } from "./_components/hero";
import { NavBar } from "./_components/navbar";

export default function Home() {
  return (
    <main className="bg-[#F3EBE4] w-screen h-screen ">
      <NavBar></NavBar>
      <Hero></Hero>
    </main>
  );
}
