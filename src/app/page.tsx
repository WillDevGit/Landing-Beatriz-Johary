import { Aboutme } from "./_components/aboutme";
import { Footer } from "./_components/footer";
import { Hero } from "./_components/hero";
import { NavBar } from "./_components/navbar";
import { PortifolioContent } from "./_components/portifolioContent";

export default function Home() {
  return (
    <main className="relative bg-[#F7ECE3] w-full min-h-screen">
      <NavBar></NavBar>
      <Hero></Hero>
      <Aboutme></Aboutme>
      <PortifolioContent></PortifolioContent>
      <Footer></Footer>
    </main>
  );
}
