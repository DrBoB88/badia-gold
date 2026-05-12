import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StorySection from "./components/StorySection";
import AgencySection from "./components/AgencySection";

export default function Home() {
  return (
    <main className="bg-black overflow-hidden">

      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* Story */}
      <StorySection />

      {/* Agency */}
      <AgencySection />

    </main>
  );
}