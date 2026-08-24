import { Aboutme } from "./_components/aboutme";
import { Clients } from "./_components/clients";
import { Experience } from "./_components/experience";
import { Footer } from "./_components/footer";
import { Hero } from "./_components/hero";
import { NavBar } from "./_components/navbar";
import { ProjectSlider } from "./_components/projectSlider";

export default function Home() {
  return (
    <main className="bg-[#F3EBE4] w-full min-h-screen">
      <NavBar></NavBar>
      <Hero></Hero>
      <Aboutme></Aboutme>
      <ProjectSlider></ProjectSlider>
      <Experience></Experience>
      <Clients></Clients>
      <Footer></Footer>
    </main>
  );
}
