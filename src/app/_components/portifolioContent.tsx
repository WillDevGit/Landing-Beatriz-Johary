"use client";
import { Clients } from "./clients";
import { Experience } from "./experience";
import { ProjectSlider } from "./projectSlider";

export function PortifolioContent() {
  return (
    <section className=" py-6 font-montserrat">
      <ProjectSlider></ProjectSlider>
      <Experience></Experience>
      <Clients></Clients>
    </section>
  );
}
